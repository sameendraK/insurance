import styled from 'styled-components';

export const DetailsFormLeftPanelWrapper = styled.div`

  .height-width-100{
    height:100%;
    width: 100%;
  }

.display-flex-align-items-center{
display:flex;
align-items:center;
}

.margin-left-16-px{
margin-left:16px
}

.logo-heading-container{
display:flex;
align-items:center;
}
.details-form-container-wrapper{
    border-radius: 0px 374px 374px 0px;
    color:white;
    background: rgba(0, 0, 0, 0.31);
    // height:150px;
    // box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    }

    .logo-container{
        display:flex;
        // height:30px;
        // width:30px;
        // text-align:center;
        // align-content:center;
        // background:#2BB4C0;
        // border-radius:50%;
        // color:white;
    }

    .nav-items-container{
    height: 35%;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    padding:4%
    }

    .active-tab{
        // background:green;
        color:#9dc6ff;
        font-size:150%;
        }
        .inactive-tab{
            // background:green;
            color:#d9d2ff;
            font-size:100%;
    }

    li{
    list-style:none;
    }

    .react-icons{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    }
    .nav-headings{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom:0;
    }

    ul{
    display:flex;
    }
`;
