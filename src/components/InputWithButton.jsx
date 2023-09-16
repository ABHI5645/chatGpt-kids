import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function InputWithButton() {
  const [text, setText] = useState("");
  const handleClick = () => {
    console.log(text);
    async function query(data) {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/suno/bark-small",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    }

    query({ inputs: text }).then((response) => {
      console.log(JSON.stringify(response));
    });
  };
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="email"
        placeholder="Enter Text"
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" onClick={() => handleClick()}>
        Convert to audio
      </Button>
    </div>
  );
}
