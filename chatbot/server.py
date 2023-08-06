import os
import subprocess
import sys
import json

script_dir = os.getcwd()


#model_path="C:/Users/wgius/Documents/RPG MZ Games/Chatbot demo/chatbot/"
#model_path="/Users/francesco/Desktop/Test_Gius/chatbot/"
# Specify your model here (folder/model.bin).
# You can find more models here: https://github.com/LostRuins/koboldcpp/discussions/87#discussion-5101609
#model = model_path + 'orca-mini-3b.ggmlv3.q5_0.bin'

#model_path = root_path + model_name


target_folder = "chatbot"  # folder with chatbot files
root_path = os.path.abspath(os.path.join(os.getcwd(), target_folder))

# Open json files and load variables
with open(root_path + '/config.json') as f:
    config = json.load(f)

# Get shared variables
model_path = config['model_path']
threadsOption = str(config['threadsOption']['threads'])
gpuLayersOption = str(config['gpuLayersOption']['gpuLayers'])

# Use this to set your command-line flags. For the full list, add --help
#Make a few tries until you find the right gpu layers amount, or it will be slow
                #+ threadsOption
CMD_FLAGS = model_path + gpuLayersOption + ' --psutil_set_threads 8080 --noblas'


def run_cmd(cmd, assert_success=False, environment=False, capture_output=False, env=None):
    # Use the conda environment
    if environment:
        conda_env_path = os.path.join(script_dir, "installer_files", "env")
        if sys.platform.startswith("win"):
            conda_bat_path = os.path.join(script_dir, "installer_files", "conda", "condabin", "conda.bat")
            cmd = "\"" + conda_bat_path + "\" activate \"" + conda_env_path + "\" >nul && " + cmd
        else:
            conda_sh_path = os.path.join(script_dir, "installer_files", "conda", "etc", "profile.d", "conda.sh")
            cmd = ". \"" + conda_sh_path + "\" && conda activate \"" + conda_env_path + "\" && " + cmd
    
    # Run shell commands
    result = subprocess.run(cmd, shell=True, capture_output=capture_output, env=env)
    
    # Assert the command ran successfully
    if assert_success and result.returncode != 0:
        print("Command '" + cmd + "' failed with exit status code '" + str(result.returncode) + "'. Exiting...")
        sys.exit()
    return result


def check_env():
    # If we have access to conda, we are probably in an environment
    conda_exist = run_cmd("conda", environment=True, capture_output=True).returncode == 0
    if not conda_exist:
        print("Conda is not installed. Exiting...")
        sys.exit()
    
    # Ensure this is a new environment and not the base environment
    if os.environ["CONDA_DEFAULT_ENV"] == "base":
        print("Create an environment for this project and activate it. Exiting...")
        sys.exit()


def install_dependencies():
    # Clone webui to our computer
    run_cmd("git clone https://github.com/LostRuins/koboldcpp.git", assert_success=True, environment=True)
    
    # Install the webui dependencies
    os.chdir("koboldcpp")
    # Need feedbacks to see if it works on Mac and Linux
    run_cmd("make", assert_success=True, environment=True)


def run_server():
    os.chdir("koboldcpp")
    run_cmd(f"python koboldcpp.py {CMD_FLAGS}", environment=True)

if __name__ == "__main__":
    # Verifies we are in a conda environment
    check_env()

    # If koboldcpp has already been installed, skip and run
    if not os.path.exists("koboldcpp/"):
        install_dependencies()
        os.chdir(script_dir)
    
    # Run the model with webui
    run_server()
