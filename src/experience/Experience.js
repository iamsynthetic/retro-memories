import {useContext} from 'react';
import NavContext from "../NavContext"
import estyle from "./Experience.module.scss"
import Firstbg from "../interface/firstbg/Firstbg"
import Secondbg from "../interface/secondbg/Secondbg"
import MainContentBox from "../interface/MainContentBox/MainContentBox"
import Rectangle from "../details/rectangle/Rectangle"
import Rectangle2 from "../details/rectangle/Rectangle"
import Rectangle3 from "../details/rectangle/Rectangle"
import OutlineVerticalRect from "../details/outline-vertical-rect/OutlineVerticalRect"
import DiagonalLine from "../details/diagonal-line/DiagonalLine"
import DotGrid from "../details/dot-grid/DotGrid"
import HorizontalLine from "../details/horizontal-line/HorizontalLine"
import ASquare from "../details/square/ASquare"
import Rectangle4 from "../details/rectangle/Rectangle"
import VerticleRectangles from "../details/verticle-rectangles/VerticleRectangles"
import RectangleFill from "../details/rectangle-fill/RectangleFill"
import Radar from "../details/radar/Radar"
import GreyRectangle from "../details/grey-rectangle/GreyRectangle"
import GreyRectangleDot from "../details/grey-rectangle-dot/GreyRectangleDot"
import AngleLine from "../details/angle-line/AngleLine"
import AngleLine2 from "../details/angle-line2/AngleLine2"
import LineDot from "../details/line-with-dot/LineDot"
import CircleRing from "../details/circle-ring/CircleRing"
import VerticleLine from "../details/verticle-line/VerticleLine"
import ConnectionLoop from "../details/connection-loop/ConnectionLoop"
import MainNav from "../navigation/main-nav/MainNav"
import SubModuleDefault from "../interface/sub-modules/sub-module-default/SubModuleDefault"
import SubModuleContainer from "../interface/sub-modules/sub-module-container/SubModuleContainer"
import TwobgLDarkFill from "../interface/two-bg-l-df/TwobgLDarkFill"
import TwobgRDarkFill from "../interface/two-bg-r-df/TwobgRDarkFill"
import MainbgBLDarkFill from "../interface/m-bg-bl-df/MainbgBLDarkFill"
import MbgTopRightDF from "../interface/m-bg-tr-df/MbgTopRightDF"
import MbgBottomRightDF from "../interface/m-bg-br-df/MbgBottomRightDF"
import Preloader from '../interface/preloader/Preloader';

const Experience = () => {

    let preloaderprops = 
    {
        delay:.5,
        duration:.3,
        fillduration:1
    }

    let firstbgprops = 
    {
        delay1:0,
        delay2:2,
        duration1: .3,
        duration2: .5,
        color:'teal'
    }

    let secondbgprops =
    {
        delay1:1.9,
        duration1:.5,
        duration2:.7,
        color:'teal'
    }

    let maincontentboxprops =
    {
        delay1:1.9,
        duration1:.5,
        duration2:.7,
        color:'teal'
    }
    let rectangleprops =
    {
        delay:2.68,
        duration1:1,
        duration2:1,
        xposstart:40,
        xposend:12,
        rectwidth:40,
        color:'black'
    }
    let rectangle2props =
    {
        delay:2.6,
        duration1:1,
        duration2:1,
        xposstart:30,
        xposend:12,
        rectwidth:30,
        color:'black'
    }
    let rectangle3props =
    {
        delay:2.65,
        duration1:1,
        duration2:1,
        xposstart:30,
        xposend:12,
        rectwidth:30,
        color:'black'
    }

    let outlineverticalrectprops =
    {
        delay:2.6,
        color:'black'
    }

    let dotgridprops =
    {
        delay:2.6,
        duration1:1,
        duration2:1,
        color:'black'
    }

    let horizontallineprops =
    {
        delay:2.8,
        duration1:1,
        duration2:1,
        color:'black'
    }

    let rectangle4props =
    {
        delay:2.8,
        duration1:1,
        duration2:1,
        xposstart:0,
        xposend:0,
        rectwidth:8,
        color:'black'
    }

    let verticalrectanglesprops =
    {
        delay:2.7,
        duration1:1,
        duration2:1,
        color:'black'
    }

    let rectanglefillprops =
    {
        delay:2.9,
        duration1:1,
        duration2:1,
        lineduration:1,
        linedelay:4,
        color:'black'
    }

    let greyrectangle1props =
    {
        delay:3.2,
        width:200,
        color:'#CCCCCB'
    }
    let greyrectangle2props =
    {
        delay:3.5,
        width:50,
        color:'#CCCCCB'
    }
    let greyrectangle3props =
    {
        delay:3.1,
        width:15,
        color:'#CCCCCB'
    }
    let greyrectangle4props =
    {
        delay:3.4,
        width:36,
        color:'#CCCCCB'
    }
    let greyrectangledot1props =
    {
        delay:3.6,
        width:5,
        height:5
    }
    let greyrectangledot2props =
    {
        delay:3.8,
        width:5,
        height:5
    }
    let greyrectangledot3props =
    {
        delay:4,
        width:5,
        height:5
    }
    let greyrectangledot4props =
    {
        delay:4.2,
        width:5,
        height:5
    }

    let angledelayamount = 3
    let anglelineprops = 
    {
        delay:angledelayamount + .2,
        dot1duration: angledelayamount + .3,
        dot2duration: angledelayamount + .3,
        dot1delay: angledelayamount + .5,
        dot2delay: angledelayamount + 1.9,
        lineduration:  1.5,
        linedelay: angledelayamount + .5,
        color:'black'
    }
    
    let angle2delayamount = 3.4
    let angleline2props = 
    {
        delay:angle2delayamount + .2,
        dot1duration: angle2delayamount + .3,
        dot2duration: angle2delayamount + .3,
        dot1delay: angle2delayamount + .5,
        dot2delay: angle2delayamount + 1.9,
        lineduration:  1.5,
        linedelay: angle2delayamount + .5,
        color:'black'
    }

    let linedotdelayamount = 3.5
    let linedotprops = 
    {
        delay:linedotdelayamount + .2,
        dot1duration: linedotdelayamount + .3,
        dot2duration: linedotdelayamount + .3,
        dot1delay: linedotdelayamount + .5,
        dot2delay: linedotdelayamount + 1.9,
        lineduration:  1.5,
        linedelay: linedotdelayamount + .5,
        color:'black'
    }

    let connectionloopprops =
    {
        delay:5.7
    }

    let mainnavprops =
    {
        delay:4,
        duration:1.5,
        sectiondelay: .2,
        sectionduration: .2,
        hoveranimduration:.1,
        disablemenuamount: 1,
        hovercolor: "#03FFFA"
    }

    let submodulecontainerprops = 
    {
        delay:3,
        sectionduration: .2,
        duration:1,
        hoverscale: 1.2,
        hovercolor:'#03FFFA',
        hoverduration: .1
    }

    let submoduledefaultprops1 =
    {
        delay:4.2,
        duration:1,
        themodule:"1",
        title:"TESTIMONIALS",
        subtitle: "Adrian",
        subbody: "I recently used [Company/'s] website and I was extremely impressed with the level of technical acumen they had displayed. It was a great experience and I highly recommend them to anyone looking for something special...",
        button: "view all"
    }
    let submoduledefaultprops2 =
    {
        delay:4.2,
        duration:1,
        themodule:"2",
        title:"RECOGNITION",
        subtitle:"Meticulously Designed",
        subbody:"[company] has been meticulously designed and trained to tackle all challenges with an extraordinary blend of wit...",
        button: "view all"
    }

    let mainbgbldarkfillprops = 
    {
        delay:5,
        duration:.75,
        ystart:-200,
        yend:0
    }

    let mbgtoprightdfprops = 
    {
        delay:5.1,
        duration:.75,
        ystart:200,
        yend:0
    }

    let mbgbottomrightdfprops = 
    {
        delay:5.3,
        duration:.75,
        ystart:-200,
        yend:0
    }

    let twobgldarkfillprops = 
    {
        delay:5.4,
        duration:.75,
        xstart:200,
        xend:0
    }

    let twobgrdarkfillprops = 
    {
        delay:5.5,
        duration:.75,
        xstart:-200,
        xend:0
    }

    const { navlabels } = useContext(NavContext)
    
    let isShuffled = false;

    const shuffle = (array) => {
        let oldElement;
        for (let i = array.length - 1; i > 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1));
            oldElement = array[i];
            array[i] = array[rand];
            array[rand] = oldElement;
        }
        return array;
    }

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const amountofdiagonalhorizontaldelay = 3
    const amountofdiagonallinehorizontal = 15
    const diagonallinehorizontal = []
    for(let i = 0; i < amountofdiagonallinehorizontal; i++) {
        diagonallinehorizontal.push(<DiagonalLine key={i} props={{delay:[amountofdiagonalhorizontaldelay+(i*.05)], color:'black'}}/>)
    }

    const amountofdiagonalverticaldelay = 3.5
    const amountofdiagonallinevertical = 45
    const diagonallinevertical = []
    for(let i = 0; i < amountofdiagonallinevertical; i++) {
        diagonallinevertical.push(<DiagonalLine key={i} props={{delay:[amountofdiagonalverticaldelay+(i*.05)], color:'black'}}/>)
    }
    
    const amountofsquaredelay = 3
    const amountofsquare = 3
    const thesquare = []
    for(let i = 0; i < amountofsquare; i++) {
        thesquare.push(
            <div key={i} className={estyle.asquarespace}>
                <ASquare props={{delay:[amountofsquaredelay+(i*.05)], color:'black', id:['square'+i]}}/>
            </div>
        )
    }

    const amountofradardelay = 3
    const rotateduration = 1
    const baserotateamount = 30
    const rotatestartratio = 100
    const rotateendratio = 90
    const amountofradar = 5
    const theradar = []
    for(let i = 0; i < amountofradar; i++) {
        theradar.push(
            <div key={i} className={estyle.radarspace}>
                <Radar props={{
                    delay:[amountofradardelay+(i*.05)], 
                    rotate:((baserotateamount*i)-10), rotateto:(randomNumber(rotatestartratio, rotateendratio) + (45*i)), 
                    rotateduration:rotateduration, 
                    color:'black'}}/>
            </div>
        )
        if((i + 1) === (amountofradar)){
            shuffle(theradar)
            isShuffled = true
        }
    }

    const amountofgreyrectangledotdelay = 3.4
    const amountofgreyrectangledot = 4
    const thegreyrectangledot = []
    for(let i = 0; i < amountofgreyrectangledot; i++) {
        thegreyrectangledot.push(
            <div key={i} className={estyle.greyrectangledotspace}>
                <GreyRectangleDot props={{delay:[amountofgreyrectangledotdelay+(i*.05)], width:5, height:5, id:['dot'+(i)]}}/>
            </div>
        )
    }

    const amountofcircleringdelay = 5
    const amountofcirclering = 7
    const circlerings = []
    for(let i = 1; i < amountofcirclering; i++) {
        circlerings.push(
            <div key={i} className={estyle.circleringspace}>
                <CircleRing props={{navlabel:navlabels[i], delay:[amountofcircleringdelay+(i*.05)], duration:.5, ringradius:6, circleradius:2, ringsize:'20px', strokecoloron:'#03FFFA', strokecoloroff:'#292728', strokewidth:'20', circlecoloron:'#03FFFA', circlecoloroff: '#292728' }}/>
            </div>
        )
    }

    const amountofverticallinedelay = 5.2
    const amountofverticalline = 12
    const verticleline = []
    for(let i = 0; i < amountofverticalline; i++) {
        verticleline.push(
            <div key={i} className={estyle.verticalspace}>
                <VerticleLine props={{delay:[amountofverticallinedelay+(i*.05)], duration:.5, color:"black"}}/>
            </div>
        )
    }

    return (
        <div>
            <div className={estyle.mobilecontainer}>
                <p>This website will not render correctly at this size.<br />Please use a larger width</p>
            </div>
            <div className={estyle.container}>
                <div className={`${estyle.alllayers} ${estyle.blackbgbottomlayer}`}>
                    <MainbgBLDarkFill props={mainbgbldarkfillprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.blackbgtoplayer}`}>
                    < MbgTopRightDF props={mbgtoprightdfprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.blackbgbottomrightlayer}`}>
                    <MbgBottomRightDF props={mbgbottomrightdfprops}/>
                </div>
                <div className={estyle.alllayers}>
                    <Firstbg props={firstbgprops}/>
                </div>
                <div className={estyle.alllayers}>
                    <Preloader props={preloaderprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.blackbgleftlayer2}`}>
                    <TwobgLDarkFill props={twobgldarkfillprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.blackbgrightlayer2}`}>
                    <TwobgRDarkFill props={twobgrdarkfillprops}/>
                </div>
                <div className={estyle.alllayers}>
                    <Secondbg props={secondbgprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.maincontentcontainer}`}>
                    <MainContentBox props={maincontentboxprops}/>
                    <div className={estyle.submodulegroup}>
                        <div className={estyle.submodulecontainer}>
                            <SubModuleContainer props={submodulecontainerprops}/>
                        </div>
                        <div className={estyle.submodules}>
                            <SubModuleDefault className={estyle.submoduledefault1} props={submoduledefaultprops1} />
                            <SubModuleDefault className={estyle.submoduledefault2} props={submoduledefaultprops2} />
                        </div>
                    </div>
                </div>
                <div className={`${estyle.alllayers} ${estyle.rectangle1}`}>
                    <Rectangle props={rectangleprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.rectangle2}`}>
                    <Rectangle2 props={rectangle2props}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.rectangle3}`}>
                    <Rectangle3 props={rectangle3props}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.outlineverticalrect}`}>
                    <OutlineVerticalRect props={outlineverticalrectprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.diagonalline}`}>
                    {diagonallinehorizontal}
                </div>
                <div className={`${estyle.alllayers} ${estyle.rotateddiagonalline}`}>
                    {diagonallinevertical}
                </div>     
                <div className={`${estyle.alllayers} ${estyle.dotgrid}`}>
                    <DotGrid props={dotgridprops}/>
                </div>  
                <div className={`${estyle.alllayers} ${estyle.horizontalline}`}>
                    <HorizontalLine props={horizontallineprops}/>
                </div>  
                <div className={`${estyle.alllayers} ${estyle.asquare}`}>
                    {thesquare}
                </div>  
                <div className={`${estyle.alllayers} ${estyle.rectangle4}`}>
                    <Rectangle4 props={rectangle4props}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.verticlerectangles}`}>
                    <VerticleRectangles props={verticalrectanglesprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.rectanglefill}`}>
                    <RectangleFill props={rectanglefillprops}/>
                </div>
                {isShuffled && 
                <div className={`${estyle.alllayers} ${estyle.radar}`}>
                    {theradar}
                </div>
                }
                <div className={`${estyle.alllayers} ${estyle.greyrectangle1}`}>
                    <GreyRectangle props={greyrectangle1props}/>
                </div> 
                <div className={`${estyle.alllayers} ${estyle.greyrectangle2}`}>
                    <GreyRectangle props={greyrectangle2props}/>
                </div> 
                <div className={`${estyle.alllayers} ${estyle.greyrectangle3}`}>
                    <GreyRectangle props={greyrectangle3props}/>
                </div>  
                <div className={`${estyle.alllayers} ${estyle.greyrectangle4}`}>
                    <GreyRectangle props={greyrectangle4props}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.greyrectangledot}`}>
                    {thegreyrectangledot}
                </div>
                <div className={`${estyle.alllayers} ${estyle.greyrectangledot1}`}>
                    <GreyRectangleDot props={greyrectangledot1props}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.greyrectangledot2}`}>
                    <GreyRectangleDot props={greyrectangledot2props}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.greyrectangledot3}`}>
                    <GreyRectangleDot props={greyrectangledot3props}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.greyrectangledot4}`}>
                    <GreyRectangleDot props={greyrectangledot4props}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.angleline}`}>
                    <AngleLine props={anglelineprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.angleline2}`}>
                    <AngleLine2 props={angleline2props}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.linedot}`}>
                    <LineDot props={linedotprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.circlering}`}>
                    {circlerings}
                </div>
                <div className={`${estyle.alllayers} ${estyle.verticalline}`}>
                    {verticleline}
                </div>
                <div className={`${estyle.alllayers} ${estyle.connectionloop}`}>
                    <ConnectionLoop props={connectionloopprops}/>
                </div>
                <div className={`${estyle.alllayers} ${estyle.mainnav}`}>
                    <MainNav props={mainnavprops}/>
                </div>
            </div>
        </div>
    );
};

export default Experience;