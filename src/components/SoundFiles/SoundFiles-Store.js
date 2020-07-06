//High E
import OpenHighE from './HighE-String-OpenE.wav'
import HighEF from './HighE-String-F.wav'
import HighEFSharp from './HighE-String-FSharp.wav'
import HighEG from './HighE-String-G.wav'
import HighEGSharp from './HighE-String-GSharp.wav'
import HighEA from './HighE-String-A.wav'

//B
import OpenB from './B-String-OpenB.wav'
import BStringC from './B-String-C.wav'
import BStringCSharp from './B-String-CSharp.wav'
import BStringD from './B-String-D.wav'
import BStringDSharp from './B-String-DSharp.wav'
import BStringE from './B-String-E.wav'
//G
import OpenG from './G-String-OpenG.wav'
import GStringGSharp from './G-String-GSharp.wav'
import GStringA from './G-String-A.wav'
import GStringASharp from './G-String-ASharp.wav'
import GStringB from './G-String-B.wav'
import GStringC from './G-String-C.wav'
//D
import OpenD from './D-String-OpenD.wav'
import DStringDSharp from './D-String-DSharp.wav'
import DStringE from './D-String-E.wav'
import DStringF from './D-String-F.wav'
import DStringFSharp from './D-String-FSharp.wav'
import DStringG from './D-String-G.wav'
//A
import OpenA from './A-String-OpenA.mp3'
import AStringBFlat from './A-String-BFlat.wav'
import AStringB from './A-String-B.wav'
import AStringC from './A-String-C.wav'
import AStringCSharp from './A-String-CSharp.wav'
import AStringD from './A-String-D.wav'
//Low E
import OpenLowE from './LowE-String-OpenE.wav'
import LowEF from './LowE-String-F.wav'
import LowEFSharp from './LowE-String-FSharp.wav'
import LowEG from './LowE-String-G.wav'
import LowEGSharp from './LowE-String-GSharp.wav'
import LowEA from './LowE-String-A.wav'

const Store = {
    HighE : {
        zero: OpenHighE,
        one: HighEF,
        two: HighEFSharp,
        three: HighEG,
        four: HighEGSharp,
        five: HighEA
    },

    B : {
        zero: OpenB,
        one: BStringC,
        two: BStringCSharp,
        three: BStringD,
        four: BStringDSharp,
        five: BStringE
    },

    G : {
        zero: OpenG,
        one: GStringGSharp,
        two: GStringA,
        three: GStringASharp,
        four: GStringB,
        five: GStringC
    },

    D: {
        zero: OpenD,
        one: DStringDSharp,
        two: DStringE,
        three: DStringF,
        four: DStringFSharp,
        five: DStringG
    },

    A: {
        zero: OpenA,
        one: AStringBFlat,
        two: AStringB,
        three: AStringC,
        four: AStringCSharp,
        five: AStringD
    },

    LowE: {
        zero: OpenLowE,
        one: LowEF,
        two: LowEFSharp,
        three: LowEG,
        four: LowEGSharp,
        five: LowEA  
    }
}
  
export default Store;