import { Pipeline, pipeline } from "@xenova/transformers"
import { transcriptionExample } from "./utils/transcription"

export async function transcribe(audio) {
  try {
    //return transcriptionExample

    console.log("Realizando a transcrição...")
    const transcribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    )
    const transcription = await transcribe(audio, {
      chunk_lenght_s: 30,
      stride_lenght_s: 5,
      language: "portuguese",
      task: "transcribe",
    })

    console.log("Transcrição finalizada com sucesso.")
    return transcription?.text.replace("[Música]", "")
  } catch (error) {
    throw new Error(error)
  }
}
