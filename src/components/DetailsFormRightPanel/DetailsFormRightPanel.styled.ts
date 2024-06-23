import styled from 'styled-components';

export const DetailsFormRightPanelWrapper = styled.div`
input{
border:0px;
border-bottom:solid 1px black;
}
input:focus{
border:0px;
border-bottom:solid 1px black;
}

.details-form-right-panel-wrapper-container{
display:flex;
}

.fVDNpt{
    height:100%
}

.right-panel-wrapper-container{
    height: 100%;
    display: flex;
}

.panel-1{
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
}

.panel-2{
    flex-direction: column;
    align-self: center;
    margin-right: auto;
    margin-left: 30px;
}
// .details-form-right-panel-wrapper-container{
// position: absolute;
//     left: 550px;
//     font-size: x-large;
//     height: 280px;
//     width: 400px;
//     text-align: center;
//     // box-shadow: 1px 5px 35px 10px #70bcff;
//     border-radius: 11px;
//     top:100px;
//     transform: translate3d(-28px, -225px, 44px);
//     // background: red;
//     height: 300px;
//     width: 285px;
//     align-content: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     gap:16px;
//     }

    .label-class{
    font-size: 16px;
    width: 100%;
    text-align: left;
    }


.panel-1, .panel-2 {
   flex: 1;
   margin: 0 10px;
}

.details-form-right-panel-container {
   margin-bottom: 15px;
}

`;
