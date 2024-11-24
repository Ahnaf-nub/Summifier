# Summifier 📄✨

Summifier is a powerful text summarization browser extension tool designed to condense large blocks of text into concise summaries. Whether you're dealing with articles, reports, or any lengthy content, Summifier leverages advanced natural language processing (NLP) techniques to generate clear and accurate summaries, saving you time and effort.

## Key Features:
- **Accurate Summarization**: Produces high-quality summaries that retain the essential information from the original text using Facebook's Bart model.
- **Key Points Highlighting**: Automatically extracts and highlights important points from the summarized text.
- **Easy-to-Use Interface**: Simple and intuitive user interface with loading indicators and clear instructions.
- **Context Menu Integration**: Right-click to summarize any selected text on any webpage.

## Technologies Used:
- **JavaScript**
- **Natural Language Processing (NLP)**
- **Transformers (Hugging Face)**

## Getting Started:
1. Clone the repository: `git clone https://github.com/yourusername/Summifier.git`
2. Go to the folder: `cd Summifier`
3. Set up your Hugging Face API key:
   - Visit [Hugging Face](https://huggingface.co/)
   - Sign up or log in to your account
   - Go to Settings → Access Tokens
   - Create a new Read token
   - Copy your API key for later use
4. Load the extension in Chrome:
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the `Summifier` directory
   - Click the extension icon and paste your API key when prompted

## Usage:
1. Select any text on a webpage
2. Right-click and choose "Summarize selected text" from the context menu
3. Wait for the loading indicator while text is being processed
4. View the generated summary and highlighted key points in the popup
