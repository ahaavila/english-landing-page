export const openWhatsapp = (message: string, number: string) => {
  window.open(`https://api.whatsapp.com/send?text=${message}&phone=${number}`)
}

export const openOneSentenceADay = () => {
  window.open('https://one-sentence-a-day.vercel.app/')
}

export const openEnglishNextLevel = () => {
  window.open('https://english-next-level.vercel.app')
}
