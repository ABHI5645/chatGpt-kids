import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AlertDescription } from "./ui/alert";
import { AlertDestructive } from "./ModelFailedAlert";
import Select from "react-select";

export function InputWithButton() {
  const [inputValue, setInputValue] = useState("");
  const [audioUrl, setAudioUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  const [model, setModel] = useState(null);

  const options = [
    {
      value: "facebook/fastspeech2-en-ljspeech",
      label: "facebook/fastspeech2-en-ljspeech",
    },
    {
      value: "suno/bark-small",
      label: "suno/bark-small",
    },
    {
      value: "microsoft/speecht5_tts",
      label: "microsoft/speecht5_tts",
    },
    {
      value: "espnet/kan-bayashi_ljspeech_vits",
      label: "espnet/kan-bayashi_ljspeech_vits",
    },
  ];

  const query = async (data, model) => {
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_SECRET}`,
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      //throw new Error("Request failed");
      setDisplayAlert(true);
      setAudioUrl(null);
      return;
    }
    setDisplayAlert(false);
    const audioData = await response.arrayBuffer();
    const blob = new Blob([audioData]);
    const url = URL.createObjectURL(blob);
    //console.log(result);
    setAudioUrl(url);
    return url;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(`User input:${inputValue}`);
    console.log(`Model chosen:${model.value}`);
    query({ inputs: inputValue }, model.value).then((response) => {
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
          <Select
            options={options}
            className="w-[20rem]"
            placeholder="Select model"
            onChange={setModel}
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
