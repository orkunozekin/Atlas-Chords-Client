//High E
import OpenHighE from './SoundFiles/HighE-String-OpenE.wav';
import HighEF from './SoundFiles/HighE-String-F.wav';
import HighEFSharp from './SoundFiles/HighE-String-FSharp.wav';
import HighEG from './SoundFiles/HighE-String-G.wav';
import HighEGSharp from './SoundFiles/HighE-String-GSharp.wav';
import HighEA from './SoundFiles/HighE-String-A.wav';

//B
import OpenB from './SoundFiles/B-String-OpenB.wav';
import BStringC from './SoundFiles/B-String-C.wav';
import BStringCSharp from './SoundFiles/B-String-CSharp.wav';
import BStringD from './SoundFiles/B-String-D.wav';
import BStringDSharp from './SoundFiles/B-String-DSharp.wav';
import BStringE from './SoundFiles/B-String-E.wav';
//G
import OpenG from './SoundFiles/G-String-OpenG.wav';
import GStringGSharp from './SoundFiles/G-String-GSharp.wav';
import GStringA from './SoundFiles/G-String-A.wav';
import GStringASharp from './SoundFiles/G-String-ASharp.wav';
import GStringB from './SoundFiles/G-String-B.wav';
import GStringC from './SoundFiles/G-String-C.wav';
//D
import OpenD from './SoundFiles/D-String-OpenD.wav';
import DStringDSharp from './SoundFiles/D-String-DSharp.wav';
import DStringE from './SoundFiles/D-String-E.wav';
import DStringF from './SoundFiles/D-String-F.wav';
import DStringFSharp from './SoundFiles/D-String-FSharp.wav';
import DStringG from './SoundFiles/D-String-G.wav';
//A
import OpenA from './SoundFiles/A-String-OpenA.mp3';
import AStringBFlat from './SoundFiles/A-String-BFlat.wav';
import AStringB from './SoundFiles/A-String-B.wav';
import AStringC from './SoundFiles/A-String-C.wav';
import AStringCSharp from './SoundFiles/A-String-CSharp.wav';
import AStringD from './SoundFiles/A-String-D.wav';
//Low E
import OpenLowE from './SoundFiles/LowE-String-OpenE.wav';
import LowEF from './SoundFiles/LowE-String-F.wav';
import LowEFSharp from './SoundFiles/LowE-String-FSharp.wav';
import LowEG from './SoundFiles/LowE-String-G.wav';
import LowEGSharp from './SoundFiles/LowE-String-GSharp.wav';
import LowEA from './SoundFiles/LowE-String-A.wav';

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