import { Pipeline, pipeline } from "@xenova/transformers"
import { summaryExample } from "./utils/summary.js"
import { text } from "express"

export async function summarize (){
  try {
    //return summaryExample  

    console.log("realizando o resumo...")
    const generator = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-12-6"
    )

    const output = await generator(text)

    console.log("Resumo concluído com sucesso!")
    return output[0].summary_text
  } catch (error) {
    console.log("Não foi possível realizar o resumo", error)
    throw new Error(error)  
  }
}