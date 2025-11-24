import OpenAI from "openai";
import readline from "readline";

const client = new OpenAI({
  apiKey: ""
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Paste your full resume. Type 'END' on a new line when finished:\n");

let resumeText = "";

rl.on("line", (line) => {
  if (line.trim() === "END") {
    rl.close();
  } else {
    resumeText += line + "\n";
  }
});

rl.on("close", async () => {
  const prompt = `
Extract all technical skills and personal skills from the following resume and return EXACT JSON:

{
  "technical_skills": [],
  "personal_skills": []
}

Resume:
${resumeText}
`;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    });

    console.log("\n=== Extracted Skills JSON ===\n");
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
});

