import styled from 'styled-components';

export const Style = styled.div`
    width: 100%;
    background-color: white;
    height: 6.5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;

    .information {
        height: 100%;
        width: 90%;
        @media (max-width: 576.98px) {
            width: 80%;
        }
        /* background-color: red; */
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        display: flex;
        align-items: center;

        .information-wrapper {
            /* background-color: yellow; */
            width: 95%;
            margin-left: 1rem;
            h4 {
                font-size: 29px;
                font-weight: 600;
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            p {
                margin-top: 1px;
                font-size: 14px;
            }
        }
    }
    .delete {
        width: 10%;
        @media (max-width: 576.98px) {
            width: 20%;
        }
        height: 100%;
        /* background-color: green; */
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            cursor: pointer;
            @media (max-width: 576.98px) {
                width: 30px;
            }
        }
    }
`;