import styled from 'styled-components';

export const ChargesSummaryWrapper = styled.div`

.wrapper{
    display:flex;
    }
// .charges-form-wrapper-container{
//     margin-right:20px;
// }
.charges-form-wrapper-container{
    // height: 500px;
    // width: 250px;
    // position:relative;
    // left:445px;
    // bottom:150px;
    // border: solid 1px blue;
    // text-align: center;
    // // box-shadow: -3px 3px 18px 2px #3b93ff;
    // transition:.8s;
    // border-radius:10px;
    // // padding:5px;
    // background-color:#fff;
    }
    // .plan-1{
    //     background:silver;
    //     // font-size:50px;
    //     color:white;
    // }
    .chrges-summary-container:hover{
        // transform:scale(1.1);
        }
        
        .wrapper{
            display:flex;
            }
            
            .card-1:hover{
                box-shadow: -3px 3px 18px 2px silver;
                border: solid 1px silver;
                border-radius:5px;
                }
                
                    .card-3:hover{
                        box-shadow: -3px 3px 18px 2px silver;
                        border: solid 2px #b8b5b8;
                        border-radius:5px;
                }
.card-1-heading{
    background-image: linear-gradient(90deg,silver, transparent);
}
.card-2-heading{
    background-image: linear-gradient(90deg,gold, transparent);
}
.card-3-heading{
    background-image: linear-gradient(90deg,#b8b5b8, transparent);
}

.width-100-percent{

width:100%;
}

.display-block{
display:block;
}

table{
color:white;
}

.download-details-button{
    border: none;
    background: transparent;
    color: #5dfff9;
}
.text-align-center{
text-align:center;
}
.recommended-card {
  position: relative;
  border-radius: 3%;
  padding: 5px 20px 15px 22px;
  overflow: hidden;
  transform: scale(1);
  transition: transform 0.4s;
  cursor:pointer;
}

.recommended-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 250%;
  height: 200%;
  background-image: linear-gradient(45deg, #197e03, transparent);
  z-index: -1;
  transform-origin: center;
  animation: rotateGradient 3.5s linear infinite;
}

.selected-card{
    border:solid 2px green;
}

.recommended-card:hover {
//   transform: scale(1.1);
border:solid 1px red;
}

@keyframes rotateGradient {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.charges-summary-wrapper-container:hover{
// transform:scale(1.1);
// transition:0.4s;
}

// .plans-container-wrapper{
//     height:100%;
//     display: grid;
//     grid-template-columns: 1fr 1.25fr 1fr;
//     gap: 2em;
    
//     }

.
// .view-more-silver-button>button{
//     background-color: #dfdfdf;
//     border: #dfdfdf;
//     padding: 6px 11px;
//     border-radius: 5px;
// }
    .view-more-button{
    position: relative;
    left: 100px;
    top: 10px;
    }
//     .view-more-button>button{
//     background-color: #dfdfdf;
//     border: #dfdfdf;
//     padding: 6px 11px;
//     border-radius: 5px;
//     }
// .view-more-platinum-button>button{
//     background-color: #dfdfdf;
//     border: #dfdfdf;
//     padding: 6px 11px;
//     border-radius: 5px;
// }
    .gold-plan-more-details{
    display:block;
    margin-top:10px;
    transition:.8s
    }
    .badge-container a {
    color: #0097be;
}
    .plan-more-details{
    // border: solid 1px gold;
    border-radius: 49px 49px 39px 41px;
    }
    .styling-row{
            font-size: xx-large;
            text-align: center;
            background: darkgoldenrod;
            width: 100%;
            border-radius:  0px 0px 135px 143px;
            color: transparent;
            pointer-events:none;
    }
    .display-none{
        display:none;
        }
        
        .view-more-silver-button{
            margin-left: 145px;
            margin-top:10px;
            }
            .view-more-platinum-button{
                margin-top:10px;
                margin-left: 145px;
    }

    tbody>tr>td{
        text-align:left;
    }
        .plan-details-table tr:nth-child(even){
            background: #767f7d;
            // background: #ebfadb;
        }
    .plan-details-table tr:nth-child(odd){
            background: #b3eda9;
        }

        .plans-container-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Adjust as needed */
    grid-auto-rows: auto;
    gap: 20px; /* Adjust spacing as needed */
}

.plans-container-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.recommended-card-heading{
    font-size: xx-large;
    text-align: center;
    background: darkgoldenrod;
    width: 100%;
    border-radius: 135px 143px 0px 0px;
    color: white;
    height: 39px;
}
.normal-card-heading{
    font-size: xx-large;
    text-align: center;
    // background: darkgoldenrod;
    width: 100%;
    border-radius: 135px 143px 0px 0px;
    color: white;
    height: 39px;
}

/* Style each plan card */
.charges-summary-wrapper-container {
    padding: 5px 20px 15px 22px;
    background: linear-gradient(45deg, #464646, transparent);
    border-radius:2%;
}

/* Position specific cards */
.plan-1 {
    grid-column: 1 / span 1; /* Start at column 1 and span 1 column */
    grid-row: 2 / span 1; /* Start at row 2 to leave the first row empty */
}

.plan-2 {
    grid-column: 2 / span 1; /* Start at column 2 and span 1 column */
    grid-row: 2 / span 1; /* Start at row 2 to leave the first row empty */
}

.plan-3 {
    grid-column: 3 / span 1; /* Start at column 3 and span 1 column */
    grid-row: 2 / span 1; /* Start at row 2 to leave the first row empty */
}
`;
