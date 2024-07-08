# User Document - Virtual Labs Code Assessment Tool

## Overview

The Virtual Labs Code Assessment Tool is designed to provide experiment developers with an efficient way to integrate code assessment exercises into their experiments and for learners to try these coding exercies to enrich their learning experience. This user document provides instructions on how to integrate and to use the Virtual Labs Code Assessment Tool effectively.

## Table of Contents

- [Getting Started](#getting-started)
  - [Understanding Problems Format](#understanding-problems-format)
  - [Integrating The Tool](#integrating-the-tool)
  - [Writing code-assessment.json](#writing-code-assessment.json)
- [Using the Code editor](#using-the-code-editor)
- [Understanding Code Result](#understanding-code-result)
- [Troubleshooting](#troubleshooting)

## Getting Started

The code assessment tool, if integrated by the developer, can be accessed with the `Code Assessment` tab on the experiments page.

## Understanding Problems Format

1. The code assessment tool allows the learners to navigate between the problems, using a switch bar at the top. The correspoding problem will be accessible upon navigating the clicking on the respective problem tab. 
2. All the problems have their description, Inputs and Output formats provided by the creators. The learners are expected to go through them and do the exercise accordingly.
3. The inputs are also described in the starting comments of the code editor as `params`.

## Integrating the Tool

Integration of the code-assessment tool requires the experiment developers to provide a `code-assessment` configuration in the experiment's `experiment-descriptor.json`. The following is an example of one such configuration with the required keys in *experiment-descriptor.json*:
```
...
{
  "code-assessment": {
    "include": true,
    "languages": ["javascript"],
    "position": 5
  },
}
...
```
- **include**: (*BOOL*) option to include the tool in the experiment
- **languages**: (List[strings]) list of supported languages
- **position**: (Integer) Index of the `Code Assessment` tab in the sidebar

**NOTE**: These configurations are all required and if absent, the tool will not be integrated with the experiment

## Writing code-assessment.json

All the required data of the problems are provided by the   `code-assessment.json` data file in the experiments directory. The file is fetched at runtime by the tool and parsed. Developers are required to follow a specific file format similar to the example provided:
```
{
    "version": 1,
    "experiment name": "Experiment Name",
    "problems": [
        {
            "problem name": "Problem 1",
            "description": "Problem 1 Description"
            "inputs": [
                [1,2,3]
            ],
            "expected": [1,2,3],
            "inputs description": "Input Description",
            "expected description": "Expected Output description"
        },
        {
            "problem name": "Problem 2",
            "description": "Problem 2 description",
            "inputs": [
              [1,2,3]
            ],
            "expected": [1,2,3],
            "inputs description": "Input Description",
            "expected description": "Expected Output description"
        }
    ]
}
```
- **version**: (String) Code Assessment Tool verion
- **Experiment Name**: (String) Experiment Name
- **problems**: (List[objects]) list of problems. Each problem has:
  - **problem name**: (String) Name of the problem
  - **description**: (String) Problem description
  - **inputs**: (List[items]) inputs to the problem. The inputs can be lists, strings, scalars
  - **expected**: (List[items]) expected output of the problem. The inputs can be lists, strings, scalars
  - **inputs description**: (String) inputs description
  - **expected description**: (String) expected outputs description

## Using the Code Editor
1. The code assessment tool currently supports only JavaScript. Thus the solution to all exercises requires to be in JavaScript only.
2. The editor supports syntax highlighting, auto-indentation, and other code editor features for a smooth coding experience.
3. The main function has been provided in the code snippet itself. Other utility methods/classes can be contructed but **the returned results of that function will be considered as the ouput**.
4. Learners are expected to use logics relevant to the problem given.

## Understanding Code Result

The result of the solution to the problem written in the code editor is simoultaneously shown in the result box. The result contains the final output of the code and a submit button. Upon submitting the code, the expected output will also be visible along with the submission result (`correct` / `incorrect`). The users can submit multiple times with no restrictions on the number of submissions.

## Known Limitations

- The tool doesnt support multiple languages at present. Also problems with multiple test cases are not provided in the current versions.

## Troubleshooting

If you encounter any issues while using Virtual Labs Code Assessment Tool, consider the following troubleshooting steps:


- **Check `assessment.log`**: The validation log for code-assessment.json is build to store compile-time logs for debugging.
- **Check `code-assessment.json` fetch status**: Check if the code-assessment.json has been fetched with status 200 using browsers developer tools.
- **Check for code errors**: Check if there are any syntax errors in the code. The code may be throwing errors not handled explicitly by the IDE.
- **Contact the VLEAD team**: The VLEAD team will connect to the experiment developer and resolve the issue.
