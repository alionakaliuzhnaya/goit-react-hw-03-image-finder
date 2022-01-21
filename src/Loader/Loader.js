import React from 'react';
import { TailSpin } from  'react-loader-spinner'
import {LoaderContainer} from "../Loader/Loader.styled"


const Loader=()=>(
    <LoaderContainer>
<TailSpin color="#00BFFF" height={80} width={80} />
</LoaderContainer>
)

export default Loader;

