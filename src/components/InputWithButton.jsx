import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AlertDescription } from "./ui/alert";
import { AlertDestructive } from "./ModelFailedAlert";

export function InputWithButton() {
  const [inputValue, setInputValue] = useState("");
  const [audioUrl, setAudioUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  const query = async (data) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/fastspeech2-en-ljspeech",
      {
        headers: {
          Authorization: `Bearer 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`,
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const audioData = await response.arrayBuffer();
    if (!response.ok) {
      //throw new Error("Request failed");
      setDisplayAlert(true);
    }
    const blob = new Blob([audioData]);
    const url = URL.createObjectURL(blob);
    //console.log(result);
    setAudioUrl(url);
    return url;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(inputValue);

    query({ inputs: inputValue }).then((response) => {
      //console.log(JSON.stringify(response));
      console.log(response);
      setLoading(false);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex w-full max-w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Enter Text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? <>Loading...</> : <>Convert to audio</>}
          </Button>
        </div>
      </form>
      {audioUrl ? (
        <audio className="mt-[1rem]" src={audioUrl} controls />
      ) : (
        <></>
      )}
      {displayAlert && (
        <div className="mt-[1rem]">
          <AlertDestructive />
        </div>
      )}
    </div>
  );
}
