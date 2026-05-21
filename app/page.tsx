import '../src/app/globals.css'
import PersonalInfo from "./components/personal"
import NextBtn from "./components/next_btn"
import SkipBtn from "./components/skip_btn"
import Tips from "./components/tips"
import BackBtn from './components/back_btn'
import DownloadHeader from './components/download_header'

export default function Home() {
  return (
    <>
      <PersonalInfo />
      <Tips />
      <BackBtn />
      <SkipBtn />
      <NextBtn />
      <DownloadHeader/>
    </>
  )
}
