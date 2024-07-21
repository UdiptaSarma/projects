import tkinter as tk
from tkinter import messagebox

import google.generativeai as genai

def create_testcase():
    user_story = text_input.get("1.0", tk.END).strip()

    # Access your API key as an environment variable.
    genai.configure(api_key="")
    # Choose a model that's appropriate for your use case.
    model = genai.GenerativeModel('gemini-1.5-flash')

    prompt = f"Generate detailed and comprehensive test cases for the following user story:\n\n{user_story}\n\nThe test cases should cover positive, negative, and edge cases. Ensure they are formatted in a clear and concise manner."

    response = model.generate_content(prompt)

    print(response.text)

    scrollable_label.config(text=response.text)
    inner_frame.update_idletasks()  # Update "scrollregion" after the label is resized
    label_canvas.config(scrollregion=label_canvas.bbox("all"))

# Create the main application window
root = tk.Tk()
root.title("Test Case Generator")

# Create and place the input field
entry_label = tk.Label(root, text="Enter Test User Story:")
entry_label.pack(pady=10)


text_input = tk.Text(root, width=100, height=10)  # Adjusting the width and height to match 500x500 pixels approximately
text_input.pack(pady=5)

# Create and place the submit button
submit_button = tk.Button(root, text="Submit", command=create_testcase)
submit_button.pack(pady=10)

# Create and place the placeholder for displaying the generated test case
#result_label = tk.Label(root, text="", wraplength=1000, justify="left")
#result_label.pack(pady=20)


label_frame = tk.Frame(root)
label_frame.pack(pady=10)

label_canvas = tk.Canvas(label_frame, width=400, height=200)
label_canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

label_scrollbar = tk.Scrollbar(label_frame, orient="vertical", command=label_canvas.yview)
label_scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

label_canvas.config(yscrollcommand=label_scrollbar.set)

# Create an inner frame to hold the label
inner_frame = tk.Frame(label_canvas)
label_canvas.create_window((0,0), window=inner_frame, anchor='nw')

# Create the scrollable label
scrollable_label = tk.Label(inner_frame, text="", wraplength=380, justify="left")
scrollable_label.pack()

# Run the application
root.mainloop()
