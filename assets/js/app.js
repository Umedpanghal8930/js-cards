const cardsData = [
    {
        image: "assets/image/card-page.png",
        title: "Lorem ipsum dolar sit de",
        date: "10/02/2022",
        place: "Mumbai",
        number: "1080",
        btn: "Go Check",
        svg_one: `
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.6">
<path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="black" style="fill:black;fill-opacity:1;"/>
<path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="black" style="fill:black;fill-opacity:1;"/>
</g>
</svg> `,
        svg_two: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_80952_34)">
<path d="M19.1998 8.15996C19.1998 14.6899 11.9998 23.04 11.9998 23.04C11.9998 23.04 4.7998 14.8454 4.7998 8.15996C4.7998 4.18316 8.023 0.959961 11.9998 0.959961C15.9761 0.959961 19.1998 4.18316 19.1998 8.15996Z" stroke="#666666" style="stroke:#666666;stroke:color(display-p3 0.4000 0.4000 0.4000);stroke-opacity:1;" stroke-width="1.7647" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M12.0001 11.52C13.5907 11.52 14.8801 10.2306 14.8801 8.64001C14.8801 7.04943 13.5907 5.76001 12.0001 5.76001C10.4095 5.76001 9.12012 7.04943 9.12012 8.64001C9.12012 10.2306 10.4095 11.52 12.0001 11.52Z" stroke="#666666" style="stroke:#666666;stroke:color(display-p3 0.4000 0.4000 0.4000);stroke-opacity:1;" stroke-width="1.7647" stroke-miterlimit="10" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_80952_34">
<rect width="24" height="24" fill="white" style="fill:white;fill-opacity:1;"/>
</clipPath>
</defs>
</svg> `,
        svg_three: `
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16.5C11.11 16.5 10.24 16.2361 9.49994 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18869 9.44736 8.81802 8.81802C9.44736 8.18869 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49994C16.2361 10.24 16.5 11.11 16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5ZM12 9C11.4067 9 10.8266 9.17595 10.3333 9.50559C9.83994 9.83524 9.45543 10.3038 9.22836 10.852C9.0013 11.4001 8.94189 12.0033 9.05765 12.5853C9.1734 13.1672 9.45912 13.7018 9.87868 14.1213C10.2982 14.5409 10.8328 14.8266 11.4147 14.9424C11.9967 15.0581 12.5999 14.9987 13.1481 14.7716C13.6962 14.5446 14.1648 14.1601 14.4944 13.6667C14.8241 13.1734 15 12.5933 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7957 9 12 9Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M15.75 23.2499H8.25C7.45435 23.2499 6.69129 22.9338 6.12868 22.3712C5.56607 21.8086 5.25 21.0456 5.25 20.2499V18.3374C5.25135 18.1885 5.29701 18.0433 5.38115 17.9204C5.4653 17.7975 5.58413 17.7025 5.7225 17.6474L8.4525 16.5524C8.54504 16.5114 8.64492 16.4895 8.74614 16.4881C8.84736 16.4867 8.94781 16.5058 9.04144 16.5443C9.13508 16.5827 9.21996 16.6398 9.29097 16.7119C9.36198 16.784 9.41765 16.8698 9.45464 16.964C9.49162 17.0583 9.50914 17.159 9.50615 17.2602C9.50317 17.3614 9.47973 17.4609 9.43725 17.5528C9.39477 17.6447 9.33413 17.727 9.25898 17.7948C9.18384 17.8626 9.09574 17.9145 9 17.9474L6.75 18.8474V20.2499C6.75 20.6477 6.90804 21.0293 7.18934 21.3106C7.47064 21.5919 7.85218 21.7499 8.25 21.7499H15.75C16.1478 21.7499 16.5294 21.5919 16.8107 21.3106C17.092 21.0293 17.25 20.6477 17.25 20.2499V18.8474L15 17.9474C14.815 17.8738 14.6668 17.7297 14.5881 17.5469C14.5093 17.364 14.5064 17.1574 14.58 16.9724C14.6536 16.7874 14.7977 16.6392 14.9805 16.5605C15.1634 16.4817 15.37 16.4788 15.555 16.5524L18.285 17.6474C18.4234 17.7025 18.5422 17.7975 18.6263 17.9204C18.7105 18.0433 18.7562 18.1885 18.7575 18.3374V20.2499C18.7575 20.6445 18.6797 21.0352 18.5284 21.3997C18.3772 21.7642 18.1555 22.0952 17.8762 22.3739C17.5968 22.6526 17.2652 22.8734 16.9004 23.0237C16.5355 23.174 16.1446 23.2509 15.75 23.2499Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M6.75 8.25C6.00832 8.25 5.2833 8.03007 4.66661 7.61801C4.04993 7.20596 3.56928 6.62029 3.28545 5.93507C3.00162 5.24984 2.92736 4.49584 3.07206 3.76841C3.21675 3.04098 3.5739 2.3728 4.09835 1.84835C4.6228 1.3239 5.29098 0.966752 6.01841 0.822057C6.74584 0.677362 7.49984 0.751625 8.18506 1.03545C8.87029 1.31928 9.45596 1.79993 9.86801 2.41661C10.2801 3.0333 10.5 3.75832 10.5 4.5C10.5 4.99246 10.403 5.48009 10.2146 5.93507C10.0261 6.39004 9.74987 6.80343 9.40165 7.15165C9.05343 7.49987 8.64004 7.7761 8.18506 7.96455C7.73009 8.15301 7.24246 8.25 6.75 8.25ZM6.75 2.25C6.30499 2.25 5.86998 2.38196 5.49997 2.6292C5.12996 2.87643 4.84157 3.22783 4.67127 3.63896C4.50098 4.0501 4.45642 4.5025 4.54324 4.93896C4.63005 5.37541 4.84434 5.77632 5.15901 6.09099C5.47368 6.40566 5.87459 6.61995 6.31105 6.70677C6.74751 6.79359 7.19991 6.74903 7.61104 6.57873C8.02217 6.40843 8.37358 6.12005 8.62081 5.75004C8.86804 5.38002 9 4.94501 9 4.5C9 3.90327 8.76295 3.33097 8.34099 2.90901C7.91904 2.48705 7.34674 2.25 6.75 2.25Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M6 14.5424H3.75C2.95435 14.5424 2.19129 14.2263 1.62868 13.6637C1.06607 13.1011 0.75 12.3381 0.75 11.5424V10.2299C0.749855 10.0797 0.794816 9.9329 0.879061 9.80854C0.963306 9.68418 1.08295 9.58798 1.2225 9.53241L3.615 8.59491C3.79721 8.52258 4.00049 8.52446 4.18132 8.60016C4.36215 8.67586 4.50615 8.81935 4.5825 8.99991C4.61903 9.09149 4.63715 9.18939 4.63581 9.28798C4.63447 9.38658 4.6137 9.48394 4.57469 9.5745C4.53568 9.66506 4.47919 9.74704 4.40846 9.81575C4.33774 9.88445 4.25415 9.93854 4.1625 9.97491L2.25 10.7399V11.5424C2.25 11.9402 2.40804 12.3218 2.68934 12.6031C2.97064 12.8844 3.35218 13.0424 3.75 13.0424H6C6.19891 13.0424 6.38968 13.1214 6.53033 13.2621C6.67098 13.4027 6.75 13.5935 6.75 13.7924C6.75 13.9913 6.67098 14.1821 6.53033 14.3227C6.38968 14.4634 6.19891 14.5424 6 14.5424Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M17.25 8.25C16.5083 8.25 15.7833 8.03007 15.1666 7.61801C14.5499 7.20596 14.0693 6.62029 13.7855 5.93507C13.5016 5.24984 13.4274 4.49584 13.5721 3.76841C13.7168 3.04098 14.0739 2.3728 14.5984 1.84835C15.1228 1.3239 15.791 0.966752 16.5184 0.822057C17.2458 0.677362 17.9998 0.751625 18.6851 1.03545C19.3703 1.31928 19.956 1.79993 20.368 2.41661C20.7801 3.0333 21 3.75832 21 4.5C21 5.49456 20.6049 6.44839 19.9017 7.15165C19.1984 7.85491 18.2446 8.25 17.25 8.25ZM17.25 2.25C16.805 2.25 16.37 2.38196 16 2.6292C15.63 2.87643 15.3416 3.22783 15.1713 3.63896C15.001 4.0501 14.9564 4.5025 15.0432 4.93896C15.1301 5.37541 15.3443 5.77632 15.659 6.09099C15.9737 6.40566 16.3746 6.61995 16.811 6.70677C17.2475 6.79359 17.6999 6.74903 18.111 6.57873C18.5222 6.40843 18.8736 6.12005 19.1208 5.75004C19.368 5.38002 19.5 4.94501 19.5 4.5C19.5 3.90327 19.2629 3.33097 18.841 2.90901C18.419 2.48705 17.8467 2.25 17.25 2.25Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M20.25 14.5424H18C17.8011 14.5424 17.6103 14.4634 17.4697 14.3228C17.329 14.1821 17.25 13.9913 17.25 13.7924C17.25 13.5935 17.329 13.4028 17.4697 13.2621C17.6103 13.1214 17.8011 13.0424 18 13.0424H20.25C20.6478 13.0424 21.0294 12.8844 21.3107 12.6031C21.592 12.3218 21.75 11.9403 21.75 11.5424V10.7399L19.8375 9.98993C19.7458 9.95356 19.6623 9.89948 19.5915 9.83077C19.5208 9.76206 19.4643 9.68009 19.4253 9.58952C19.3863 9.49896 19.3655 9.4016 19.3642 9.30301C19.3629 9.20441 19.381 9.10652 19.4175 9.01493C19.4896 8.83029 19.6318 8.68169 19.8131 8.60158C19.9943 8.52148 20.2 8.51639 20.385 8.58743L22.7775 9.52493C22.917 9.58051 23.0367 9.67671 23.1209 9.80107C23.2052 9.92543 23.2501 10.0722 23.25 10.2224V11.5349C23.251 11.9295 23.1741 12.3204 23.0238 12.6853C22.8735 13.0501 22.6526 13.3817 22.374 13.6611C22.0953 13.9405 21.7643 14.1621 21.3998 14.3134C21.0353 14.4646 20.6446 14.5424 20.25 14.5424Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
</svg>
 `,
    },
  {
    image: "assets/image/card-page.png",
    title: "Lorem ipsum dolar sit de",
    date: "10/02/2022",
    place: "Mumbai",
    number: "1080",
    btn: "Go Check",
    svg_one: `
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.6">
<path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="black" style="fill:black;fill-opacity:1;"/>
<path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="black" style="fill:black;fill-opacity:1;"/>
</g>
</svg> `,
    svg_two: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_80952_34)">
<path d="M19.1998 8.15996C19.1998 14.6899 11.9998 23.04 11.9998 23.04C11.9998 23.04 4.7998 14.8454 4.7998 8.15996C4.7998 4.18316 8.023 0.959961 11.9998 0.959961C15.9761 0.959961 19.1998 4.18316 19.1998 8.15996Z" stroke="#666666" style="stroke:#666666;stroke:color(display-p3 0.4000 0.4000 0.4000);stroke-opacity:1;" stroke-width="1.7647" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M12.0001 11.52C13.5907 11.52 14.8801 10.2306 14.8801 8.64001C14.8801 7.04943 13.5907 5.76001 12.0001 5.76001C10.4095 5.76001 9.12012 7.04943 9.12012 8.64001C9.12012 10.2306 10.4095 11.52 12.0001 11.52Z" stroke="#666666" style="stroke:#666666;stroke:color(display-p3 0.4000 0.4000 0.4000);stroke-opacity:1;" stroke-width="1.7647" stroke-miterlimit="10" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_80952_34">
<rect width="24" height="24" fill="white" style="fill:white;fill-opacity:1;"/>
</clipPath>
</defs>
</svg> `,
    svg_three: `
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16.5C11.11 16.5 10.24 16.2361 9.49994 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18869 9.44736 8.81802 8.81802C9.44736 8.18869 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49994C16.2361 10.24 16.5 11.11 16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5ZM12 9C11.4067 9 10.8266 9.17595 10.3333 9.50559C9.83994 9.83524 9.45543 10.3038 9.22836 10.852C9.0013 11.4001 8.94189 12.0033 9.05765 12.5853C9.1734 13.1672 9.45912 13.7018 9.87868 14.1213C10.2982 14.5409 10.8328 14.8266 11.4147 14.9424C11.9967 15.0581 12.5999 14.9987 13.1481 14.7716C13.6962 14.5446 14.1648 14.1601 14.4944 13.6667C14.8241 13.1734 15 12.5933 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7957 9 12 9Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M15.75 23.2499H8.25C7.45435 23.2499 6.69129 22.9338 6.12868 22.3712C5.56607 21.8086 5.25 21.0456 5.25 20.2499V18.3374C5.25135 18.1885 5.29701 18.0433 5.38115 17.9204C5.4653 17.7975 5.58413 17.7025 5.7225 17.6474L8.4525 16.5524C8.54504 16.5114 8.64492 16.4895 8.74614 16.4881C8.84736 16.4867 8.94781 16.5058 9.04144 16.5443C9.13508 16.5827 9.21996 16.6398 9.29097 16.7119C9.36198 16.784 9.41765 16.8698 9.45464 16.964C9.49162 17.0583 9.50914 17.159 9.50615 17.2602C9.50317 17.3614 9.47973 17.4609 9.43725 17.5528C9.39477 17.6447 9.33413 17.727 9.25898 17.7948C9.18384 17.8626 9.09574 17.9145 9 17.9474L6.75 18.8474V20.2499C6.75 20.6477 6.90804 21.0293 7.18934 21.3106C7.47064 21.5919 7.85218 21.7499 8.25 21.7499H15.75C16.1478 21.7499 16.5294 21.5919 16.8107 21.3106C17.092 21.0293 17.25 20.6477 17.25 20.2499V18.8474L15 17.9474C14.815 17.8738 14.6668 17.7297 14.5881 17.5469C14.5093 17.364 14.5064 17.1574 14.58 16.9724C14.6536 16.7874 14.7977 16.6392 14.9805 16.5605C15.1634 16.4817 15.37 16.4788 15.555 16.5524L18.285 17.6474C18.4234 17.7025 18.5422 17.7975 18.6263 17.9204C18.7105 18.0433 18.7562 18.1885 18.7575 18.3374V20.2499C18.7575 20.6445 18.6797 21.0352 18.5284 21.3997C18.3772 21.7642 18.1555 22.0952 17.8762 22.3739C17.5968 22.6526 17.2652 22.8734 16.9004 23.0237C16.5355 23.174 16.1446 23.2509 15.75 23.2499Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M6.75 8.25C6.00832 8.25 5.2833 8.03007 4.66661 7.61801C4.04993 7.20596 3.56928 6.62029 3.28545 5.93507C3.00162 5.24984 2.92736 4.49584 3.07206 3.76841C3.21675 3.04098 3.5739 2.3728 4.09835 1.84835C4.6228 1.3239 5.29098 0.966752 6.01841 0.822057C6.74584 0.677362 7.49984 0.751625 8.18506 1.03545C8.87029 1.31928 9.45596 1.79993 9.86801 2.41661C10.2801 3.0333 10.5 3.75832 10.5 4.5C10.5 4.99246 10.403 5.48009 10.2146 5.93507C10.0261 6.39004 9.74987 6.80343 9.40165 7.15165C9.05343 7.49987 8.64004 7.7761 8.18506 7.96455C7.73009 8.15301 7.24246 8.25 6.75 8.25ZM6.75 2.25C6.30499 2.25 5.86998 2.38196 5.49997 2.6292C5.12996 2.87643 4.84157 3.22783 4.67127 3.63896C4.50098 4.0501 4.45642 4.5025 4.54324 4.93896C4.63005 5.37541 4.84434 5.77632 5.15901 6.09099C5.47368 6.40566 5.87459 6.61995 6.31105 6.70677C6.74751 6.79359 7.19991 6.74903 7.61104 6.57873C8.02217 6.40843 8.37358 6.12005 8.62081 5.75004C8.86804 5.38002 9 4.94501 9 4.5C9 3.90327 8.76295 3.33097 8.34099 2.90901C7.91904 2.48705 7.34674 2.25 6.75 2.25Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M6 14.5424H3.75C2.95435 14.5424 2.19129 14.2263 1.62868 13.6637C1.06607 13.1011 0.75 12.3381 0.75 11.5424V10.2299C0.749855 10.0797 0.794816 9.9329 0.879061 9.80854C0.963306 9.68418 1.08295 9.58798 1.2225 9.53241L3.615 8.59491C3.79721 8.52258 4.00049 8.52446 4.18132 8.60016C4.36215 8.67586 4.50615 8.81935 4.5825 8.99991C4.61903 9.09149 4.63715 9.18939 4.63581 9.28798C4.63447 9.38658 4.6137 9.48394 4.57469 9.5745C4.53568 9.66506 4.47919 9.74704 4.40846 9.81575C4.33774 9.88445 4.25415 9.93854 4.1625 9.97491L2.25 10.7399V11.5424C2.25 11.9402 2.40804 12.3218 2.68934 12.6031C2.97064 12.8844 3.35218 13.0424 3.75 13.0424H6C6.19891 13.0424 6.38968 13.1214 6.53033 13.2621C6.67098 13.4027 6.75 13.5935 6.75 13.7924C6.75 13.9913 6.67098 14.1821 6.53033 14.3227C6.38968 14.4634 6.19891 14.5424 6 14.5424Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M17.25 8.25C16.5083 8.25 15.7833 8.03007 15.1666 7.61801C14.5499 7.20596 14.0693 6.62029 13.7855 5.93507C13.5016 5.24984 13.4274 4.49584 13.5721 3.76841C13.7168 3.04098 14.0739 2.3728 14.5984 1.84835C15.1228 1.3239 15.791 0.966752 16.5184 0.822057C17.2458 0.677362 17.9998 0.751625 18.6851 1.03545C19.3703 1.31928 19.956 1.79993 20.368 2.41661C20.7801 3.0333 21 3.75832 21 4.5C21 5.49456 20.6049 6.44839 19.9017 7.15165C19.1984 7.85491 18.2446 8.25 17.25 8.25ZM17.25 2.25C16.805 2.25 16.37 2.38196 16 2.6292C15.63 2.87643 15.3416 3.22783 15.1713 3.63896C15.001 4.0501 14.9564 4.5025 15.0432 4.93896C15.1301 5.37541 15.3443 5.77632 15.659 6.09099C15.9737 6.40566 16.3746 6.61995 16.811 6.70677C17.2475 6.79359 17.6999 6.74903 18.111 6.57873C18.5222 6.40843 18.8736 6.12005 19.1208 5.75004C19.368 5.38002 19.5 4.94501 19.5 4.5C19.5 3.90327 19.2629 3.33097 18.841 2.90901C18.419 2.48705 17.8467 2.25 17.25 2.25Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M20.25 14.5424H18C17.8011 14.5424 17.6103 14.4634 17.4697 14.3228C17.329 14.1821 17.25 13.9913 17.25 13.7924C17.25 13.5935 17.329 13.4028 17.4697 13.2621C17.6103 13.1214 17.8011 13.0424 18 13.0424H20.25C20.6478 13.0424 21.0294 12.8844 21.3107 12.6031C21.592 12.3218 21.75 11.9403 21.75 11.5424V10.7399L19.8375 9.98993C19.7458 9.95356 19.6623 9.89948 19.5915 9.83077C19.5208 9.76206 19.4643 9.68009 19.4253 9.58952C19.3863 9.49896 19.3655 9.4016 19.3642 9.30301C19.3629 9.20441 19.381 9.10652 19.4175 9.01493C19.4896 8.83029 19.6318 8.68169 19.8131 8.60158C19.9943 8.52148 20.2 8.51639 20.385 8.58743L22.7775 9.52493C22.917 9.58051 23.0367 9.67671 23.1209 9.80107C23.2052 9.92543 23.2501 10.0722 23.25 10.2224V11.5349C23.251 11.9295 23.1741 12.3204 23.0238 12.6853C22.8735 13.0501 22.6526 13.3817 22.374 13.6611C22.0953 13.9405 21.7643 14.1621 21.3998 14.3134C21.0353 14.4646 20.6446 14.5424 20.25 14.5424Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
</svg>
 `,
  },
  {
    image: "assets/image/card-page.png",
    title: "Lorem ipsum dolar sit de",
    date: "10/02/2022",
    place: "Mumbai",
    number: "1080",
    btn: "Go Check",
    svg_one: `
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.6">
<path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="black" style="fill:black;fill-opacity:1;"/>
<path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="black" style="fill:black;fill-opacity:1;"/>
</g>
</svg> `,
    svg_two: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_80952_34)">
<path d="M19.1998 8.15996C19.1998 14.6899 11.9998 23.04 11.9998 23.04C11.9998 23.04 4.7998 14.8454 4.7998 8.15996C4.7998 4.18316 8.023 0.959961 11.9998 0.959961C15.9761 0.959961 19.1998 4.18316 19.1998 8.15996Z" stroke="#666666" style="stroke:#666666;stroke:color(display-p3 0.4000 0.4000 0.4000);stroke-opacity:1;" stroke-width="1.7647" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M12.0001 11.52C13.5907 11.52 14.8801 10.2306 14.8801 8.64001C14.8801 7.04943 13.5907 5.76001 12.0001 5.76001C10.4095 5.76001 9.12012 7.04943 9.12012 8.64001C9.12012 10.2306 10.4095 11.52 12.0001 11.52Z" stroke="#666666" style="stroke:#666666;stroke:color(display-p3 0.4000 0.4000 0.4000);stroke-opacity:1;" stroke-width="1.7647" stroke-miterlimit="10" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_80952_34">
<rect width="24" height="24" fill="white" style="fill:white;fill-opacity:1;"/>
</clipPath>
</defs>
</svg> `,
    svg_three: `
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16.5C11.11 16.5 10.24 16.2361 9.49994 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18869 9.44736 8.81802 8.81802C9.44736 8.18869 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49994C16.2361 10.24 16.5 11.11 16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5ZM12 9C11.4067 9 10.8266 9.17595 10.3333 9.50559C9.83994 9.83524 9.45543 10.3038 9.22836 10.852C9.0013 11.4001 8.94189 12.0033 9.05765 12.5853C9.1734 13.1672 9.45912 13.7018 9.87868 14.1213C10.2982 14.5409 10.8328 14.8266 11.4147 14.9424C11.9967 15.0581 12.5999 14.9987 13.1481 14.7716C13.6962 14.5446 14.1648 14.1601 14.4944 13.6667C14.8241 13.1734 15 12.5933 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7957 9 12 9Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M15.75 23.2499H8.25C7.45435 23.2499 6.69129 22.9338 6.12868 22.3712C5.56607 21.8086 5.25 21.0456 5.25 20.2499V18.3374C5.25135 18.1885 5.29701 18.0433 5.38115 17.9204C5.4653 17.7975 5.58413 17.7025 5.7225 17.6474L8.4525 16.5524C8.54504 16.5114 8.64492 16.4895 8.74614 16.4881C8.84736 16.4867 8.94781 16.5058 9.04144 16.5443C9.13508 16.5827 9.21996 16.6398 9.29097 16.7119C9.36198 16.784 9.41765 16.8698 9.45464 16.964C9.49162 17.0583 9.50914 17.159 9.50615 17.2602C9.50317 17.3614 9.47973 17.4609 9.43725 17.5528C9.39477 17.6447 9.33413 17.727 9.25898 17.7948C9.18384 17.8626 9.09574 17.9145 9 17.9474L6.75 18.8474V20.2499C6.75 20.6477 6.90804 21.0293 7.18934 21.3106C7.47064 21.5919 7.85218 21.7499 8.25 21.7499H15.75C16.1478 21.7499 16.5294 21.5919 16.8107 21.3106C17.092 21.0293 17.25 20.6477 17.25 20.2499V18.8474L15 17.9474C14.815 17.8738 14.6668 17.7297 14.5881 17.5469C14.5093 17.364 14.5064 17.1574 14.58 16.9724C14.6536 16.7874 14.7977 16.6392 14.9805 16.5605C15.1634 16.4817 15.37 16.4788 15.555 16.5524L18.285 17.6474C18.4234 17.7025 18.5422 17.7975 18.6263 17.9204C18.7105 18.0433 18.7562 18.1885 18.7575 18.3374V20.2499C18.7575 20.6445 18.6797 21.0352 18.5284 21.3997C18.3772 21.7642 18.1555 22.0952 17.8762 22.3739C17.5968 22.6526 17.2652 22.8734 16.9004 23.0237C16.5355 23.174 16.1446 23.2509 15.75 23.2499Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M6.75 8.25C6.00832 8.25 5.2833 8.03007 4.66661 7.61801C4.04993 7.20596 3.56928 6.62029 3.28545 5.93507C3.00162 5.24984 2.92736 4.49584 3.07206 3.76841C3.21675 3.04098 3.5739 2.3728 4.09835 1.84835C4.6228 1.3239 5.29098 0.966752 6.01841 0.822057C6.74584 0.677362 7.49984 0.751625 8.18506 1.03545C8.87029 1.31928 9.45596 1.79993 9.86801 2.41661C10.2801 3.0333 10.5 3.75832 10.5 4.5C10.5 4.99246 10.403 5.48009 10.2146 5.93507C10.0261 6.39004 9.74987 6.80343 9.40165 7.15165C9.05343 7.49987 8.64004 7.7761 8.18506 7.96455C7.73009 8.15301 7.24246 8.25 6.75 8.25ZM6.75 2.25C6.30499 2.25 5.86998 2.38196 5.49997 2.6292C5.12996 2.87643 4.84157 3.22783 4.67127 3.63896C4.50098 4.0501 4.45642 4.5025 4.54324 4.93896C4.63005 5.37541 4.84434 5.77632 5.15901 6.09099C5.47368 6.40566 5.87459 6.61995 6.31105 6.70677C6.74751 6.79359 7.19991 6.74903 7.61104 6.57873C8.02217 6.40843 8.37358 6.12005 8.62081 5.75004C8.86804 5.38002 9 4.94501 9 4.5C9 3.90327 8.76295 3.33097 8.34099 2.90901C7.91904 2.48705 7.34674 2.25 6.75 2.25Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M6 14.5424H3.75C2.95435 14.5424 2.19129 14.2263 1.62868 13.6637C1.06607 13.1011 0.75 12.3381 0.75 11.5424V10.2299C0.749855 10.0797 0.794816 9.9329 0.879061 9.80854C0.963306 9.68418 1.08295 9.58798 1.2225 9.53241L3.615 8.59491C3.79721 8.52258 4.00049 8.52446 4.18132 8.60016C4.36215 8.67586 4.50615 8.81935 4.5825 8.99991C4.61903 9.09149 4.63715 9.18939 4.63581 9.28798C4.63447 9.38658 4.6137 9.48394 4.57469 9.5745C4.53568 9.66506 4.47919 9.74704 4.40846 9.81575C4.33774 9.88445 4.25415 9.93854 4.1625 9.97491L2.25 10.7399V11.5424C2.25 11.9402 2.40804 12.3218 2.68934 12.6031C2.97064 12.8844 3.35218 13.0424 3.75 13.0424H6C6.19891 13.0424 6.38968 13.1214 6.53033 13.2621C6.67098 13.4027 6.75 13.5935 6.75 13.7924C6.75 13.9913 6.67098 14.1821 6.53033 14.3227C6.38968 14.4634 6.19891 14.5424 6 14.5424Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M17.25 8.25C16.5083 8.25 15.7833 8.03007 15.1666 7.61801C14.5499 7.20596 14.0693 6.62029 13.7855 5.93507C13.5016 5.24984 13.4274 4.49584 13.5721 3.76841C13.7168 3.04098 14.0739 2.3728 14.5984 1.84835C15.1228 1.3239 15.791 0.966752 16.5184 0.822057C17.2458 0.677362 17.9998 0.751625 18.6851 1.03545C19.3703 1.31928 19.956 1.79993 20.368 2.41661C20.7801 3.0333 21 3.75832 21 4.5C21 5.49456 20.6049 6.44839 19.9017 7.15165C19.1984 7.85491 18.2446 8.25 17.25 8.25ZM17.25 2.25C16.805 2.25 16.37 2.38196 16 2.6292C15.63 2.87643 15.3416 3.22783 15.1713 3.63896C15.001 4.0501 14.9564 4.5025 15.0432 4.93896C15.1301 5.37541 15.3443 5.77632 15.659 6.09099C15.9737 6.40566 16.3746 6.61995 16.811 6.70677C17.2475 6.79359 17.6999 6.74903 18.111 6.57873C18.5222 6.40843 18.8736 6.12005 19.1208 5.75004C19.368 5.38002 19.5 4.94501 19.5 4.5C19.5 3.90327 19.2629 3.33097 18.841 2.90901C18.419 2.48705 17.8467 2.25 17.25 2.25Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
<path d="M20.25 14.5424H18C17.8011 14.5424 17.6103 14.4634 17.4697 14.3228C17.329 14.1821 17.25 13.9913 17.25 13.7924C17.25 13.5935 17.329 13.4028 17.4697 13.2621C17.6103 13.1214 17.8011 13.0424 18 13.0424H20.25C20.6478 13.0424 21.0294 12.8844 21.3107 12.6031C21.592 12.3218 21.75 11.9403 21.75 11.5424V10.7399L19.8375 9.98993C19.7458 9.95356 19.6623 9.89948 19.5915 9.83077C19.5208 9.76206 19.4643 9.68009 19.4253 9.58952C19.3863 9.49896 19.3655 9.4016 19.3642 9.30301C19.3629 9.20441 19.381 9.10652 19.4175 9.01493C19.4896 8.83029 19.6318 8.68169 19.8131 8.60158C19.9943 8.52148 20.2 8.51639 20.385 8.58743L22.7775 9.52493C22.917 9.58051 23.0367 9.67671 23.1209 9.80107C23.2052 9.92543 23.2501 10.0722 23.25 10.2224V11.5349C23.251 11.9295 23.1741 12.3204 23.0238 12.6853C22.8735 13.0501 22.6526 13.3817 22.374 13.6611C22.0953 13.9405 21.7643 14.1621 21.3998 14.3134C21.0353 14.4646 20.6446 14.5424 20.25 14.5424Z" fill="#666666" style="fill:#666666;fill:color(display-p3 0.4000 0.4000 0.4000);fill-opacity:1;"/>
</svg>
 `,
  },
];

function createCard(cardData) {
    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-xl-4', 'mb-24');
    let cardContent = `
    <div class="card  rounded-4">
      <img src="${cardData.image}" class="card-img-top  w-100" alt="${cardData.title}">
      <div class="card-body p-0">
        <h5 class="card-title poppins-font text-black fw-semibold fs-md lh-150 mt-21 mb-0 ">${cardData.title}</h5>
        <div class="d-flex gap-8 mt-12 align-items-center ">
         <div class="svg-container"> ${cardData.svg_one} </div>
          <p class="date fs-sm poppins-font lh-150 text-black fw-normal opacity-60 mb-0">${cardData.date}</p>
        </div>
         <div class="d-flex gap-8 mt-12">
          <div class="svg-container"> ${cardData.svg_two} </div>
         <p class="place fs-sm poppins-font lh-150 text-black fw-normal opacity-60 mb-0">${cardData.place}</p>
         </div>
        <div class="d-flex gap-8 mt-12 ">
        <div class="svg-container"> ${cardData.svg_three} </div>
          <p class="number fs-sm poppins-font lh-150 text-black fw-normal opacity-60 mb-0">${cardData.number}</p>
        </div>
         <button class="btn fs-sm poppins-font fw-semibold text-start text-white lh-150  mt-32"> ${cardData.btn}</button>
      </div>
    </div>
  `;
    card.innerHTML = cardContent;
    return card;
}

const cardContainer = document.getElementById('card-container');
cardsData.forEach(cardData => {
    const card = createCard(cardData);
    cardContainer.appendChild(card);

});