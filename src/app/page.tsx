import Message from "@/components/Message";
import React from "react";
import metaMessage from "@/components/Message/Message.stories"
import metaChatbox from "@/components/Controls/Input/Input.stories"
import Input from "@/components/Controls/Input";
import RCBoard from "@/components/RCBoard";
import Button from "@/components/Controls/Button";

export default function Home() {
  return (
  <div className="p-5 flex justify-center items-center flex-col gap-y-16">
    <div className="grid gap-10">
      <Message content={metaMessage!.args!.content!}></Message> 

      <Message content={metaMessage!.args!.content!} className="justify-self-end"></Message> 
    </div>
    <div className="flex flex-col justify-center items-center gap-y-5 max-w-[90%] md:max-w-[70%]">
      <div className="size-full flex flex-row gap-3 items-center">
        <Input placeholder={metaChatbox!.args!.placeholder!}></Input>
        <Button content="Enter" className="bg-green-200 hover:bg-green-300 w-40 text-center border-2"></Button>
      </div>
      <RCBoard length={15}></RCBoard>
    </div>
  </div>
  );
}
