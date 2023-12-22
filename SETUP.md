Run the following command to create a conda virtual environment:
```bash
conda create --name LaRemontADA61 python=3.9
conda activate LaRemontADA61   
```

Head to the folder you want to contain this GitHub repository:
```bash
cd my/folder/path
```

Clone this GitHub repository:
```bash
git clone https://github.com/epfl-ada/ada-2023-project-laremontada61/
```

Create a folder that will contain our pre-processed dataset files:
```bash
mkdir dataset_BeerReviews
```

Download the files from [here](https://drive.google.com/file/d/1wIIfhQDdF5lH42bKQ3pLoStu_Wem2rGE/view?usp=drive_link), put them in it and unzip them.

Move into the cloned repo:
```bash
cd ada-2023-project-laremontada61/
```

If you are using MacOS with an arm64 architecture run:
```bash
pip install -r requirements_arm64.txt
```

If you are using Windows run:

```bash
pip install -r requirements_x86.txt
```
Enjoy coding !