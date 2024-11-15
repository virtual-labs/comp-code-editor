# Virtual Labs Code Assessment Tool - Content Creator Document

## Overview

The Virtual Labs Code Assessment Tool is designed to help experiment developers integrate code assessment exercises into their experiments and offer learners a hands-on coding experience. This document provides detailed instructions on how to integrate and use the Code Assessment Tool effectively, whether you are a developer or a learner.

## Table of Contents

- [Getting Started](#getting-started)
  - [Understanding Problems Format](#understanding-problems-format)
  - [Integrating The Tool](#integrating-the-tool)
  - [Writing code-assessment.json](#writing-code-assessment.json)
- [Using the Code editor](#using-the-code-editor)
- [Understanding Code Result](#understanding-code-result)
- [Troubleshooting](#troubleshooting)

## Getting Started

If the developer has integrated the Code Assessment Tool into an experiment, it can be accessed through the `Code Assessment` tab on the experiment's page. This tool allows learners to solve coding problems within a virtual lab, providing a hands-on learning experience.

### Understanding Problems Format

1. The `Code Assessment Tool` allows learners to navigate between coding problems using a switch bar located at the top of the page. By clicking on the respective problem tab, learners can access the corresponding problem.

2. Each problem includes:

    - **Description:** A detailed explanation of the problem.
    - **Input Format:** Defines the type of input expected by the code.
    - **Output Format:** Specifies what the output should be after the code is executed.
    
    Learners are expected to carefully review these sections before attempting the exercise. 

3. The input parameters for the problem are described in the starting comments of the code editor as `params`. These comments provide learners with information about what inputs their code should expect and process.

### Integrating the Tool

To integrate the code assessment tool, developers need to configure the `code-assessment` settings within the `experiment-descriptor.json` file of the experiment. Below is an [example configuration](https://github.com/virtual-labs/exp-bubble-sort-iiith/blob/main/experiment-descriptor.json) with the required keys:
```
...
{
  "code-assessment": {
    "include": true,
    "languages": ["javascript"],
    "position": 6
  },
}
...
```
- **include**: (*Boolean*) Indicates whether the tool should be included in the experiment.
- **languages**: (*List[String]*) Specifies the list of supported programming languages.
- **position**: (*Integer*) Defines the position index of the `Code Assessment` tab in the experiment’s sidebar.

**NOTE**: All these configurations are mandatory. If any are missing, the tool will not be integrated into the experiment.

### Writing code-assessment.json

The problems and their associated data are specified in the `code-assessment.json` file, which should be located in the experiment's directory. The tool dynamically fetches and parses this file at runtime. Developers must adhere to the specified format when creating this file, as illustrated in the example of [Bubble Sort](https://ds1-iiith.vlabs.ac.in/exp/bubble-sort/code-assessment.html) experiment below:
```
{
    "version": 1,
    "experiment name": "Bubble Sort",
    "problems": [
        {
            "problem name": "Basic Bubble Sort",
            "description": "Implement basic Bubble Sort algorithm for the given input array"
            "inputs": [
                [64,66,20,49,11,79]
            ],
            "expected": [11,20,49,64,66,79],
            "inputs description": "Input consists of an array of unsorted array - inp1. It may be of arbitrary length.",
            "expected description": "An array of numbers Eg. 1,2,4,5 sorted in ascending orders",
            "difficulty": "beginner",
            "hint" :"Make sure to swap elements properly."
        },
        {
            "problem name": "Optimized Bubble Sort",
            "description": "Implement Optimized Bubble Sort algorithm for the given input array",
            "inputs": [
              [10,9,24,100,2,300,258,59]
            ],
            "expected": [2,9,10,24,59,100,258,300],
            "inputs description": "Input consists of an array of unsorted array - inp1. It may be of arbitrary length.",
            "expected description": "An array of numbers Eg. 1,2,4,5 sorted in ascending orders",
            "difficulty": "intermediate",
            "hint" : "Please ignore already sorted portions to avoide unnecessary comparisons."
        }
    ]
}
```

- **version**: (*String*) The version of the Code Assessment Tool.
- **Experiment Name**: (*String*) The name of the experiment.
- **problems**: (*List[Object]*) A list of problems, where each problem includes:
  - **problem name**: (*String*) The name of the problem.
  - **description**: (*String*) A detailed description of the problem.
  - **inputs**: (*List[Items]*) Inputs for the problem, which can be lists, strings, or scalars.
  - **expected**: (*List[Items]*) The expected output for the problem, formatted similarly to the inputs.
  - **inputs description**: (*String*) A description of the inputs.
  - **expected description**: (*String*) A description of the expected outputs.
  - **difficulty**: (*String*) The difficulty level of the problem. The tab color will change based on the difficulty level:
      - Green - beginner
      - Orange - intermediate
      - Red - advanced
  - **hint**: (*String*) An optional field where you can provide a hint to assist learners in solving the problem.

## Using the Code Editor
1. The Code Assessment Tool currently supports **JavaScript** only. All solutions must be written in JavaScript.
2. The editor features syntax highlighting, auto-indentation, and other coding tools to provide a seamless coding experience.
3. The **main function** is pre-defined in the code editor. Developers can create additional utility methods or classes, but **only the returned result of the main function will be considered as the output.**
4. Learners should apply relevant logic based on the problem statement.

## Understanding Code Result
After writing and running the code in the editor:

- The output is displayed in the result box alongside the code editor.
- A **Submit button** allows learners to submit their code for evaluation. Upon submission:
  - The expected output will be shown alongside the learner's output.
  - The submission result will indicate whether the code is **correct** or **incorrect.**
- Learners can submit multiple times, with no restrictions on the number of attempts.

## Known Limitations

- The tool currently supports **only one programming language** (JavaScript). Additional languages are not yet supported.
- The tool does not support problems with **multiple test cases** in its current version.

## Troubleshooting

If you encounter any issues while using the Virtual Labs Code Assessment Tool, consider the following troubleshooting steps:

- **Check `assessment.log`:**
  Review the validation log (`assessment.log`) for compile-time logs, which can help in debugging any issues with `code-assessment.json`.
- **Check `code-assessment.json` Fetch Status:**
  Ensure that the `code-assessment.json` file is successfully fetched (status code 200) using the browser's developer tools.
- **Check for Code Errors:**
  Verify that there are no syntax errors in the code. Unhandled errors may cause issues within the editor.
- **Contact the VLEAD Team:**
  If issues persist, contact the VLEAD team. They will assist the experiment developer in resolving the issue.
