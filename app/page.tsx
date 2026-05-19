import './globals.css'
import PersonalInfo from "./components/personal"
import NextBtn from "./components/next_btn"
import SkipBtn from "./components/skip_btn"
import Tips from "./components/tips"
import BackBtn from './components/back_btn'


export default function Home() {
  return (
    <>
      <Tips />
      <PersonalInfo />
      <BackBtn/>
      <NextBtn />
      <SkipBtn />
    </>
  )
}
