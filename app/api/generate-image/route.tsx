
import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";



export async function POST(req:NextRequest){
  const data = await req.json();
  const {prompt} = data;
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const input = {
    prompt: prompt,
    go_fast: true,
    lora_scale: 0.8,
    megapixels: "1",
    num_outputs: 1,
    aspect_ratio: "1:1",
    lora_weights: "fofr/flux-black-light",
    output_format: "webp",
    output_quality: 80,
    num_inference_steps: 4
  };
  
  const output:any = await replicate.run("black-forest-labs/flux-schnell-lora", { input });
  console.log(output);
  return NextResponse.json({"imageUrl" : output[0]})

}