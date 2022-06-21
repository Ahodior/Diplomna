import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPages from './Pages/MainPages'
import Catalog from './Pages/Catalog/Catalog';
import Title1 from './Pages/Title1/Title1';
import Auth from './Pages/Auth/Auth';
import ChapterAT1 from './Pages/Title1/ChapterAT1';
import ChapterAT2 from './Pages/Title1/ChapterAT2';
import ChapterAT3 from './Pages/Title1/ChapterAT3';
import Title2 from './Pages/Title2/Title2';
import ChapterBer1 from './Pages/Title2/ChapterBer1';
import ChapterBer2 from './Pages/Title2/ChapterBer2';
import ChapterBer3 from './Pages/Title2/ChapterBer3';
import Title3 from './Pages/Title3/Title3';
import ChapterBL1 from './Pages/Title3/ChapterBL1';
import ChapterBL2 from './Pages/Title3/ChapterBL2';
import ChapterBL3 from './Pages/Title3/ChapterBl3';
import Title4 from './Pages/Title4/Title4';
import ChapterBZOO1 from './Pages/Title4/ChapterBZOO1';
import ChapterBZOO2 from './Pages/Title4/ChapterBZOO2';
import ChapterBZOO3 from './Pages/Title4/ChapterBZOO3';
import Title5 from './Pages/Title5/Title5';
import ChapterJOJO1 from './Pages/Title5/ChapterJOJO1';
import ChapterJOJO2 from './Pages/Title5/ChapterJOJO2';
import ChapterJOJO3 from './Pages/Title5/ChapterJOJO3';
import Title6 from './Pages/Title6/Title6';
import ChapterKILL1 from './Pages/Title6/ChapterKILL1';
import ChapterKILL2 from './Pages/Title6/ChapterKILL2';
import ChapterKILL3 from './Pages/Title6/ChapterKILL3';
import Title7 from './Pages/Title7/Title7';
import ChapterONEPICE1 from './Pages/Title7/ChapterONEPICE1';
import ChapterONEPICE2 from './Pages/Title7/ChapterONEPICE2';
import ChapterONEPICE3 from './Pages/Title7/ChapterONEPICE3';
import Title8 from './Pages/Title8/Title8';
import ChapterPR1 from './Pages/Title8/ChapterPR1';
import ChapterPR2 from './Pages/Title8/ChapterPR2';
import ChapterPR3 from './Pages/Title8/ChapterPR3';
import Title9 from './Pages/Title9/Title9';
import ChapterPOHOME1 from './Pages/Title9/ChapterPOHOME1';
import ChapterPOHOME2 from './Pages/Title9/ChapterPOHOME2';
import ChapterPOHOME3 from './Pages/Title9/ChapterPOHOME3';
import Title10 from './Pages/Title10/Title10';
import ChapterTRASH1 from './Pages/Title10/ChapterTRASH1';
import ChapterTRASH2 from './Pages/Title10/ChapterTRASH2';
import ChapterTRASH3 from './Pages/Title10/ChapterTRASH3';
import Title11 from './Pages/Title11/Title11';
import ChapterVSR1 from './Pages/Title11/ChapterVSR1';
import ChapterVSR2 from './Pages/Title11/ChapterVSR2';
import ChapterVSR3 from './Pages/Title11/ChapterVSR3';
import Title12 from './Pages/Title12/Title12';
import ChapterMYD1 from './Pages/Title12/ChapterMYD1';
import ChapterMYD2 from './Pages/Title12/ChapterMYD2';
import ChapterMYD3 from './Pages/Title12/ChapterMYD3';
import Title13 from './Pages/Title13/Title13';
import ChapterBLOOD1 from './Pages/Title13/ChapterBLOOD1';
import ChapterBLOOD2 from './Pages/Title13/ChapterBLOOD2';
import ChapterBLOOD3 from './Pages/Title13/ChapterBLOOD3';
import Title14 from './Pages/Title14/Title14';
import ChapterBOYGUN1 from './Pages/Title14/ChapterBOYGUN1';
import ChapterBOYGUN2 from './Pages/Title14/ChapterBOYGUN2';
import ChapterBOYGUN3 from './Pages/Title14/ChapterBOYGUN3';
import Title15 from './Pages/Title15/Title15';
import ChapterROMEO1 from './Pages/Title15/ChapterROMEO1';
import ChapterROMEO2 from './Pages/Title15/ChapterROMEO2';
import ChapterROMEO3 from './Pages/Title15/ChapterROMEO3';
import Title16 from './Pages/Title16/Title16';
import ChapterDOP1 from './Pages/Title16/ChapterDOP1';
import ChapterDOP2 from './Pages/Title16/ChapterDOP2';
import ChapterDOP3 from './Pages/Title16/ChapterDOP3';
import Title17 from './Pages/Title17/Title17';
import ChapterPRNM1 from './Pages/Title17/ChapterPRNM1';
import ChapterPRNM2 from './Pages/Title17/ChapterPRNM2';
import ChapterPRNM3 from './Pages/Title17/ChapterPRNM3';
import Title18 from './Pages/Title18/Title18';
import ChapterBLPR1 from './Pages/Title18/ChapterBLPR1';
import ChapterBLPR2 from './Pages/Title18/ChapterBLPR2';
import ChapterBLPR3 from './Pages/Title18/ChapterBLPR3';
import Title19 from './Pages/Title19/Title19';
import ChapterCHEES1 from './Pages/Title19/ChapterCHEES1';
import ChapterCHEES2 from './Pages/Title19/ChapterCHEES2';
import ChapterCHEES3 from './Pages/Title19/ChapterCHEES3';
import Title20 from './Pages/Title20/Title20';
import ChapterWAIFU1 from './Pages/Title20/ChapterWAIFU1';
import ChapterWAIFU2 from './Pages/Title20/ChapterWAIFU2';
import ChapterWAIFU3 from './Pages/Title20/ChapterWAIFU3';
import Title21 from './Pages/Title21/Title21';
import ChapterHIS1 from './Pages/Title21/ChapterHIS1';
import ChapterHIS2 from './Pages/Title21/ChapterHIS2';
import ChapterHIS3 from './Pages/Title21/ChapterHIS3';
import Title22 from './Pages/Title22/Title22';
import ChapterSLIFE1 from './Pages/Title22/ChapterSLIFE1';
import ChapterSLIFE2 from './Pages/Title22/ChapterSLIFE2';
import ChapterSLIFE3 from './Pages/Title22/ChapterSLIFE3';
import Title23 from './Pages/Title23/Title23';
import ChapterFEN1 from './Pages/Title23/ChapterFEN1';
import ChapterFEN2 from './Pages/Title23/ChapterFEN2';
import ChapterFEN3 from './Pages/Title23/ChapterFEN3';
import Title24 from './Pages/Title24/Title24';
import ChapterWARPR1 from './Pages/Title24/ChapterWARPR1';
import ChapterWARPR2 from './Pages/Title24/ChapterWARPR2';
import ChapterWARPR3 from './Pages/Title24/ChapterWARPR3';
import Title25 from './Pages/Title25/Title25';
import ChapterALH1 from './Pages/Title25/ChapterALH1';
import ChapterALH2 from './Pages/Title25/ChapterALH2';
import ChapterALH3 from './Pages/Title25/ChapterALH3';
import Title26 from './Pages/Title26/Title26';
import ChapterSP1 from './Pages/Title26/ChapterSP1';
import ChapterSP2 from './Pages/Title26/ChapterSP2';
import ChapterSP3 from './Pages/Title26/ChapterSP3';


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path={"/login"} element={<Auth/>}/>
        <Route path={"/reg"} element={<Auth/>}/>

        <Route path='/title1' element={<Title1/>}/>
        <Route path='/title2' element={<Title2/>}/>
        <Route path='/title3' element={<Title3/>}/>
        <Route path='/title4' element={<Title4/>}/>
        <Route path='/title5' element={<Title5/>}/>
        <Route path='/title6' element={<Title6/>}/>
        <Route path='/title7' element={<Title7/>}/>
        <Route path='/title8' element={<Title8/>}/>
        <Route path='/title9' element={<Title9/>}/>
        <Route path='/title10' element={<Title10/>}/>
        <Route path='/title11' element={<Title11/>}/>
        <Route path='/title12' element={<Title12/>}/>
        <Route path='/title13' element={<Title13/>}/>
        <Route path='/title14' element={<Title14/>}/>
        <Route path='/title15' element={<Title15/>}/>
        <Route path='/title16' element={<Title16/>}/>
        <Route path='/title17' element={<Title17/>}/>
        <Route path='/title18' element={<Title18/>}/>
        <Route path='/title19' element={<Title19/>}/>
        <Route path='/title20' element={<Title20/>}/>
        <Route path='/title21' element={<Title21/>}/>
        <Route path='/title22' element={<Title22/>}/>
        <Route path='/title23' element={<Title23/>}/>
        <Route path='/title24' element={<Title24/>}/>
        <Route path='/title25' element={<Title25/>}/>
        <Route path='/title26' element={<Title26/>}/>
    
        <Route path={"/chapterat1"} element={<ChapterAT1/>}/>
        <Route path={"/chapterat2"} element={<ChapterAT2/>}/>
        <Route path={"/chapterat3"} element={<ChapterAT3/>}/>
        <Route path={"/chapterber1"} element={<ChapterBer1/>}/>
        <Route path={"/chapterber2"} element={<ChapterBer2/>}/>
        <Route path={"/chapterber3"} element={<ChapterBer3/>}/>
        <Route path={"/chapterbl1"} element={<ChapterBL1/>}/>
        <Route path={"/chapterbl2"} element={<ChapterBL2/>}/>
        <Route path={"/chapterbl3"} element={<ChapterBL3/>}/>
        <Route path={"/chapterbzoo1"} element={<ChapterBZOO1/>}/>
        <Route path={"/chapterbzoo2"} element={<ChapterBZOO2/>}/>
        <Route path={"/chapterbzoo3"} element={<ChapterBZOO3/>}/>
        <Route path={"/chapterjojo1"} element={<ChapterJOJO1/>}/>
        <Route path={"/chapterjojo2"} element={<ChapterJOJO2/>}/>
        <Route path={"/chapterjojo3"} element={<ChapterJOJO3/>}/>
        <Route path={"/chapterkill1"} element={<ChapterKILL1/>}/>
        <Route path={"/chapterkill2"} element={<ChapterKILL2/>}/>
        <Route path={"/chapterkill3"} element={<ChapterKILL3/>}/>
        <Route path={"/chapteronepice1"} element={<ChapterONEPICE1/>}/>
        <Route path={"/chapteronepice2"} element={<ChapterONEPICE2/>}/>
        <Route path={"/chapteronepice3"} element={<ChapterONEPICE3/>}/>
        <Route path={"/chapterpr1"} element={<ChapterPR1/>}/>
        <Route path={"/chapterpr2"} element={<ChapterPR2/>}/>
        <Route path={"/chapterpr3"} element={<ChapterPR3/>}/>
        <Route path={"/chapterpohome1"} element={<ChapterPOHOME1/>}/>
        <Route path={"/chapterpohome2"} element={<ChapterPOHOME2/>}/>
        <Route path={"/chapterpohome3"} element={<ChapterPOHOME3/>}/>
        <Route path={"/chaptertrash1"} element={<ChapterTRASH1/>}/>
        <Route path={"/chaptertrash2"} element={<ChapterTRASH2/>}/>
        <Route path={"/chaptertrash3"} element={<ChapterTRASH3/>}/>
        <Route path={"/chaptervsr1"} element={<ChapterVSR1/>}/>
        <Route path={"/chaptervsr2"} element={<ChapterVSR2/>}/>
        <Route path={"/chaptervsr3"} element={<ChapterVSR3/>}/>
        <Route path={"/chaptermyd1"} element={<ChapterMYD1/>}/>
        <Route path={"/chaptermyd2"} element={<ChapterMYD2/>}/>
        <Route path={"/chaptermyd3"} element={<ChapterMYD3/>}/>
        <Route path={"/chapterblood1"} element={<ChapterBLOOD1/>}/>
        <Route path={"/chapterblood2"} element={<ChapterBLOOD2/>}/>
        <Route path={"/chapterblood3"} element={<ChapterBLOOD3/>}/>
        <Route path={"/chapterboygun1"} element={<ChapterBOYGUN1/>}/>
        <Route path={"/chapterboygun2"} element={<ChapterBOYGUN2/>}/>
        <Route path={"/chapterboygun3"} element={<ChapterBOYGUN3/>}/>
        <Route path={"/chapterromeo1"} element={<ChapterROMEO1/>}/>
        <Route path={"/chapterromeo2"} element={<ChapterROMEO2/>}/>
        <Route path={"/chapterromeo3"} element={<ChapterROMEO3/>}/>
        <Route path={"/chapterdop1"} element={<ChapterDOP1/>}/>
        <Route path={"/chapterdop2"} element={<ChapterDOP2/>}/>
        <Route path={"/chapterdop3"} element={<ChapterDOP3/>}/>
        <Route path={"/chapterprnm1"} element={<ChapterPRNM1/>}/>
        <Route path={"/chapterprnm2"} element={<ChapterPRNM2/>}/>
        <Route path={"/chapterprnm3"} element={<ChapterPRNM3/>}/>
        <Route path={"/chapterblpr1"} element={<ChapterBLPR1/>}/>
        <Route path={"/chapterblpr2"} element={<ChapterBLPR2/>}/>
        <Route path={"/chapterblpr3"} element={<ChapterBLPR3/>}/>
        <Route path={"/chapterchees1"} element={<ChapterCHEES1/>}/>
        <Route path={"/chapterchees2"} element={<ChapterCHEES2/>}/>
        <Route path={"/chapterchees3"} element={<ChapterCHEES3/>}/>
        <Route path={"/chapterwaifu1"} element={<ChapterWAIFU1/>}/>
        <Route path={"/chapterwaifu2"} element={<ChapterWAIFU2/>}/>
        <Route path={"/chapterwaifu3"} element={<ChapterWAIFU3/>}/>
        <Route path={"/chapterhis1"} element={<ChapterHIS1/>}/>
        <Route path={"/chapterhis2"} element={<ChapterHIS2/>}/>
        <Route path={"/chapterhis3"} element={<ChapterHIS3/>}/>
        <Route path={"/chapterslife1"} element={<ChapterSLIFE1/>}/>
        <Route path={"/chapterslife2"} element={<ChapterSLIFE2/>}/>
        <Route path={"/chapterslife3"} element={<ChapterSLIFE3/>}/>
        <Route path={"/chapterfen1"} element={<ChapterFEN1/>}/>
        <Route path={"/chapterfen2"} element={<ChapterFEN2/>}/>
        <Route path={"/chapterfen3"} element={<ChapterFEN3/>}/>
        <Route path={"/chapterwarpr1"} element={<ChapterWARPR1/>}/>
        <Route path={"/chapterwarpr2"} element={<ChapterWARPR2/>}/>
        <Route path={"/chapterwarpr3"} element={<ChapterWARPR3/>}/>
        <Route path={"/chapteralh1"} element={<ChapterALH1/>}/>
        <Route path={"/chapteralh2"} element={<ChapterALH2/>}/>
        <Route path={"/chapteralh3"} element={<ChapterALH3/>}/>
        <Route path={"/chaptersp1"} element={<ChapterSP1/>}/>
        <Route path={"/chaptersp2"} element={<ChapterSP2/>}/>
        <Route path={"/chaptersp3"} element={<ChapterSP3/>}/>

        <Route path='/' element={<MainPages/>}/>
      </Routes>
    </div>
  );
}
export default App;