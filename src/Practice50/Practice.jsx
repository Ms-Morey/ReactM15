import React, { useState } from 'react'
import WelcomeComp_1 from './Tasks/WelcomeComp_1'
import UserProfile from './Tasks/UserProfile'
import { hobbies , movies } from './Data'
import HobbiesT3 from './Tasks/HobbiesT3'
import DefaultColorT4 from './Tasks/DefaultColorT4'
import MoviesT5 from './Tasks/MoviesT5'
import T6_Counter from './Tasks/T6_Counter'
import T7_Toggle from './Tasks/T7_Toggle'
import T8_RTFTracker from './Tasks/T8_RTFTracker'
import T9_Todo from './Tasks/T9_Todo'
import T10_Cart from './Tasks/T10_Cart'
import T11_AlertButton from './Tasks/T11_AlertButton'
import T12_ConsoleForm from './Tasks/T12_ConsoleForm'
import T13_LivePreview from './Tasks/T13_LivePreview'
import T14_ParaToggle from './Tasks/T14_ParaToggle'
import T15_Dropdown from './Tasks/T15_Dropdown'
import T16_RandomJoke from './Tasks/T16_RandomJoke'
import T17_DigitalClock from './Tasks/T17_DigitalClock'
import T18_MouseTracker from './Tasks/T18_MouseTracker'
import T19_Welcome from './Tasks/T19_Welcome'
import T20_CounterLog from './Tasks/T20_CounterLog'
import T21_LoginConditional from './Tasks/T21_LoginConditional'
import T22_Wheather from './Tasks/T22_Wheather'
import T23_LoadingData from './Tasks/T23_LoadingData'
import T24_TodoList from './Tasks/T24_TodoList'
import T25_DynamicTheme from './Tasks/T25_DynamicTheme'
import T26_ColorList from './Tasks/T26_ColorList'
import T27_StudentGrades from './Tasks/T27_StudentGrades'
import T28_DeletionFromList from './Tasks/T28_DeletionFromList'
import T29_ProductCatalogList from './Tasks/T29_ProductCatalogList'
import T30_SearchItem from './Tasks/T30_SearchItem'
import T31_BasicForm from './Tasks/T31_BasicForm'
import T32_FeedbackForm from './Tasks/T32_FeedbackForm'
import T33_EmailValidation from './Tasks/T33_EmailValidation'
import T34_ShoppingList from './Tasks/T34_ShoppingList'
import T35_ContactUsForm from './Tasks/T35_ContactUsForm'
import T36_ReusableApiHook from './Tasks/T36_ReusableApiHook'
import T37_WindowSizeTrackingHook from './Tasks/T37_WindowSizeTrackingHook'
import T38_ToggleHook from './Tasks/T38_ToggleHook'
import T39_CachedUserFetchingHook from './Tasks/T39_CachedUserFetchingHook'

const Practice = () => {
    const [state, setState] = useState({username:"", age:"", list:[]})
    const [isDark, setIsDark] = useState(false)
    let {username, age} = state
   let  handleChange =(e)=>{
        const {name, value} = e.target;
        setState((prev)=>{return {...prev,[name]:value}})
    }
    let rang = "blue"

  return (
    <div className={`h-screen w-full flex flex-col bg-slate-200`}>
        {/* <div className='flex justify-center'>
            <form action="" className='flex flex-col justify-center items-center'>
                <input type="text" onChange={handleChange} name='username' value={username} className='border rounded-md p-2 m-2' placeholder='username' />
                <input type="text" onChange={handleChange} name='age' value={age} className='border rounded-md p-2 m-2' placeholder='age'/>
                <button onClick={(e)=>{
                    e.preventDefault()
                    setState({...state, list:[{username:state.username, age:state.age}]})
                }} className='bg-green-500 font-semibold rounded-md px-5 py-2 text-white'>Submit</button>
            </form>
        </div> */}

       <div>
         {/* Task 1 */}
        {/* <WelcomeComp_1 user={"Akshada"}/> */}

        {/* Task 2 */}
        {/* <UserProfile user={{name:"Mahesh",age:23, loc:"Pune"}}/> */}

        {/* Task 3 */}
        {/* <HobbiesT3 hobbies={hobbies}/> */}

        {/* Task4  */}
        {/* <DefaultColorT4 color={rang}/> */}

        {/* Task5  */}
        {/* <MoviesT5 movies={movies}/> */}

        {/* Task 6 */}
        {/* <T6_Counter/> */}

        {/* Task 7 */}
        {/* <T7_Toggle/> */}

        {/* Task 8 */}
        {/* <T8_RTFTracker/> */}

        {/* Task 9 */}
        {/* <T9_Todo/> */}

        {/* Task 10 */}
        {/* <T10_Cart/> */}

        {/* <T11_AlertButton/> */}
        {/* <T12_ConsoleForm/> */}
        {/* <T13_LivePreview/> */}
        {/* <T14_ParaToggle/> */}

        {/* <T15_Dropdown/> */}
        {/* <T16_RandomJoke/> */}
        {/* <T17_DigitalClock/> */}
        {/* <T18_MouseTracker/> */}
        {/* <T19_Welcome/> */}
        {/* <T20_CounterLog/> */}
        {/* <T21_LoginConditional/> */}
        {/* <T22_Wheather/> */}
        {/* <T23_LoadingData/> */}
        {/* <T24_TodoList/> */}
        {/* <T25_DynamicTheme/> */}
        {/* <T26_ColorList/> */}
        {/* <T27_StudentGrades/> */}
        {/* <T28_DeletionFromList/> */}
        {/* <T29_ProductCatalogList/> */}
        {/* <T30_SearchItem/> */}
        {/* <T31_BasicForm/> */}
        {/* <T32_FeedbackForm/> */}
        {/* <T33_EmailValidation/> */}
        {/* <T34_ShoppingList/> */}
        {/* <T35_ContactUsForm/> */}
        {/* <T36_ReusableApiHook/> */}
        {/* <T37_WindowSizeTrackingHook/> */}
        {/* <T38_ToggleHook/> */}
        

       </div>
    </div>
  )
}

export default Practice