(this["webpackJsonpimpvis-project-draft"]=this["webpackJsonpimpvis-project-draft"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(8),s=n(2),r=(n(16),n(23)),a=n(0),l=[{question:"PCR is used to",choices:["amplify gene of interest","construct RAPD maps","detect the presence of transgene in an organism","all of the above"],rightAnswer:"amplify gene of interest",hint:"If you already need help with this question, then you should actually watch the videos!",hintType:"text"},{question:"The right order of PCR process 1. Denaturation 2. Annealing 3. Extension?",choices:["1,2,3","2,3,1","2,1,3","None Of The Above"],rightAnswer:"1,2,3",hint:"It's definitely not D.",hintType:"text"},{question:"By which enzyme is RNA copied into complementary DNA (cDNA)?",choices:["Taq DNA polymerase","RNA polymerase II","Reverse transcriptase","Uracil-N-Glycosylase"],rightAnswer:"Reverse transcriptase",hint:"Remember, the process that convert RNA into cDNA is known as reverse transcription. Can you guess which is the answer now?",hintType:"text"},{question:"The basic reaction of PCR reaction include",choices:["DNA segment to be amplified","two oligonucleotide primers","a heat stable DNA polymerase","all of the above"],rightAnswer:"all of the above",hint:"https://youtu.be/iQsu3Kz9NYo?t=29",hintType:"link"},{question:"Denaturation involves",choices:["heating between 90-98'C","heating between 40-60'C","heating between 72'C","none of the above"],rightAnswer:"heating between 90-98'C",hint:"https://youtu.be/iQsu3Kz9NYo?t=70",hintType:"link"},{question:"The process of binding of primer to the denatured strand is called?",choices:["denaturation","annealing","renaturation","none of the above"],rightAnswer:"annealing",hint:"https://youtu.be/iQsu3Kz9NYo?t=84",hintType:"link"},{question:"What would be the effect on the PCR reaction if any of the following circumstances arose: 1) there are no primers? 2) there are no dNTPs in the reaction, 3) there is no Taq polymerase in the reaction?",choices:["PCR would proceed normally","Non-specific PCR of random templates will occur","The reaction will cease after a few cycles","The PCR will not commence"],rightAnswer:"The PCR will not commence",hint:"Both no primers and no dNTPs means no annealing process, and no Taq polymerase will result in no extension process either.",hintType:"text"},{question:"What would the expected effect be on a PCR reaction if the primers used were slightly shorter and more variable than the intended oligonucleotide sequences?",choices:["The PCR reaction would not commence","The PCR reaction would end after one cycle","The reaction would generate a single short PCR product","The reaction would yield a mixture of non-specific products"],rightAnswer:"The reaction would yield a mixture of non-specific products",hint:"Remember, a primer is a short single-strained nucleic acid used by all living organisms in the initiation of DNA synthesis which bind to the single strand DNA by complementary base pairing.",hintType:"text"},{question:"Which type of gene is used as an internal control gene?",choices:["housekeeping gene","plasmid","target gene","maintenence gene"],rightAnswer:"housekeeping gene",hint:"In many RT-qPCR reactions, housekeeping genes are used as internal control genes without proper validation. Target Gene often just means Gene Of Interest, or the particular gene being studied or manipulated in an experiment.",hintType:"text"},{question:"Through which phase of the amplification plot is the threshold line drawn to work out Ct values?",choices:["ground phase","exponential phase","linear phase","plateau phase"],rightAnswer:"exponential phase",hint:"https://youtu.be/Kq1YfWJHgOQ?t=45",hintType:"link"}];function u(e,t){t?window.open(e,"_blank","noopener noreferrer"):window.location.href=e}var h=["100","500","1,000","5,000","10,000","50,000","100,000","250,000","500,000","1,000,000"];function b(){var e=o.a.useState(!1),t=Object(s.a)(e,2),i=t[0],b=t[1],d=Object(c.useState)("NoAnswer"),j=Object(s.a)(d,2),p=j[0],f=j[1],O=function(){f("NoAnswer")},x=Object(c.useState)("button"),g=Object(s.a)(x,2),m=g[0],w=g[1],k=Object(c.useState)("button"),y=Object(s.a)(k,2),v=y[0],T=y[1],A=Object(c.useState)("button"),C=Object(s.a)(A,2),R=C[0],N=C[1],_=Object(c.useState)("button"),q=Object(s.a)(_,2),P=q[0],S=q[1],D=Object(c.useState)(0),W=Object(s.a)(D,2),M=W[0],Y=W[1],I=Object(c.useState)(l.length+1),z=Object(s.a)(I,2),F=z[0],Q=z[1],B=Object(c.useState)(""),K=Object(s.a)(B,2),L=K[0],G=K[1],J=Object(c.useState)("fif"),E=Object(s.a)(J,2),H=E[0],U=E[1],V=Object(c.useState)("call"),X=Object(s.a)(V,2),Z=X[0],$=X[1],ee=Object(c.useState)("poll"),te=Object(s.a)(ee,2),ne=te[0],ce=te[1],oe=Object(c.useState)([25,25,25,25]),ie=Object(s.a)(oe,2),se=ie[0],re=ie[1],ae=function(){var e=l[F].rightAnswer,t=l[F].choices.indexOf(e),n=Math.floor(10*Math.random())+25,c=Math.floor(10*Math.random())+20,o=Math.floor(10*Math.random())+20,i=100-(n+c+o);switch(t){default:break;case 0:re([n,c,o,i]);break;case 1:re([i,n,c,o]);break;case 2:re([o,i,n,c]);break;case 3:re([c,o,i,n])}},le=Object(c.useState)("ra"),ue=Object(s.a)(le,2),he=ue[0],be=ue[1],de=function(){Y((function(e){return e+1})),w("button"),T("button"),N("button"),S("button"),"fif clicked"===H&&U("fif used"),"poll clicked"===ne&&ce("poll used"),"call clicked"===Z&&$("call used"),"ra clicked"===he&&be("ra used"),F<l.length&&Q((function(e){return e+1})),setTimeout(O,1500)};if(F<l.length){var je=l.length,pe=Array.from({length:je},(function(e,t){return t+1})).reverse().slice(Math.max(je-F-5,0),Math.max(je-F,5));return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{class:"top_row_left",children:Object(a.jsxs)("table",{class:"lifelines_table",children:[Object(a.jsx)("tr",{children:Object(a.jsx)("button",{class:H,onClick:function(){if("fif"===H){U("fif clicked");var e=l[F].rightAnswer;switch(l[F].choices.indexOf(e)){default:break;case 0:N("button used"),S("button used");break;case 1:w("button used"),N("button used");break;case 2:T("button used"),S("button used");break;case 3:w("button used"),T("button used")}}},children:"50:50"})}),Object(a.jsx)("tr",{children:Object(a.jsx)("button",{class:Z,onClick:function(){"call"===Z&&("link"===l[F].hintType&&u(l[F].hint,!0),$("call clicked"),"text"===l[F].hintType&&b(!0))},children:"Phone Your Supervisor"})}),Object(a.jsx)("tr",{children:Object(a.jsx)("button",{class:ne,onClick:function(){"poll"===ne&&(ce("poll clicked"),ae())},children:"Ask the Audience"})}),Object(a.jsx)("tr",{children:Object(a.jsx)("button",{class:he,onClick:function(){"ra"===he&&u("https://www.youtube.com/watch?v=dQw4w9WgXcQ",!0),be("ra clicked")},children:"Ask RA"})})]})}),Object(a.jsx)("img",{class:"quiz",src:n(7),alt:"The Who Wants to be a Researcher Logo"}),Object(a.jsx)("div",{class:"icon"}),Object(a.jsx)("div",{class:"top_row_right",children:Object(a.jsxs)("table",{class:"price_table",children:[Object(a.jsx)("th",{children:"Your current research funding"}),pe.map((function(e){return Object(a.jsx)("tr",{class:(t=e-1,t===F?"price_current":"price_tr"),children:Object(a.jsx)("td",{class:"price_td",children:"".concat(e,". \xa3").concat(h[Math.min(e-1,je)])})});var t}))]})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("div",{class:"question",children:l[F].question})}),Object(a.jsxs)("div",{class:"button_div",children:[Object(a.jsx)("input",{type:"button",class:m,value:"A. ".concat(l[F].choices[0]),onClick:function(){"button"===m&&(w("button clicked"),G(l[F].choices[0]),"button clicked"===v&&T("button"),"button clicked"===R&&N("button"),"button clicked"===P&&S("button")),"button clicked"===m&&w("button")},onChange:function(e){return G(l[F].choices[0])},checked:L===l[F].choices[0]}),Object(a.jsx)("input",{type:"button",className:v,value:"B. ".concat(l[F].choices[1]),onClick:function(){"button"===v&&(T("button clicked"),G(l[F].choices[1]),"button clicked"===m&&w("button"),"button clicked"===R&&N("button"),"button clicked"===P&&S("button")),"button clicked"===v&&T("button")},onChange:function(e){return G(e.target.value)},checked:L===l[F].choices[1]})]}),Object(a.jsxs)("div",{class:"button_div",children:[Object(a.jsx)("input",{type:"button",className:R,value:"C. ".concat(l[F].choices[2]),onClick:function(){"button"===R&&(N("button clicked"),G(l[F].choices[2]),"button clicked"===m&&w("button"),"button clicked"===v&&T("button"),"button clicked"===P&&S("button")),"button clicked"===R&&N("button")},onChange:function(e){return G(e.target.value)},checked:L===l[F].choices[2]}),Object(a.jsx)("input",{type:"button",className:P,value:"D. ".concat(l[F].choices[3]),onClick:function(){"button"===P&&(S("button clicked"),G(l[F].choices[3]),"button clicked"===m&&w("button"),"button clicked"===v&&T("button"),"button clicked"===R&&N("button")),"button clicked"===P&&S("button")},onChange:function(e){return G(e.target.value)},checked:L===l[F].choices[3]})]}),Object(a.jsx)("div",{children:"poll clicked"===ne?Object(a.jsxs)("div",{class:"poll_results",children:["Poll Results",Object(a.jsxs)("table",{class:"poll_table",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{class:"poll_th",children:"A"}),Object(a.jsx)("th",{class:"poll_th",children:"B"}),Object(a.jsx)("th",{class:"poll_th",children:"C"}),Object(a.jsx)("th",{class:"poll_th",children:"D"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{class:"poll_td",children:[se[0],"%"]}),Object(a.jsxs)("td",{class:"poll_td",children:[se[1],"%"]}),Object(a.jsxs)("td",{class:"poll_td",children:[se[2],"%"]}),Object(a.jsxs)("td",{class:"poll_td",children:[se[3],"%"]})]})]})]}):Object(a.jsx)("div",{})}),Object(a.jsx)("div",{children:"button clicked"===m||"button clicked"===v||"button clicked"===R||"button clicked"===P?Object(a.jsx)("div",{class:"answer_sub",children:Object(a.jsx)("button",{type:"button",onClick:function(e){if(e.preventDefault(),L===l[F].rightAnswer){switch(f("Correct"),clearTimeout(),setTimeout(O,1500),l[F].choices.indexOf(L)){default:break;case 0:setTimeout(w("button correct"),500),setTimeout(T(v+" nocursor"),500),setTimeout(N(R+" nocursor"),500),setTimeout(S(P+" nocursor"),500);break;case 1:setTimeout(T("button correct"),500),setTimeout(w(m+" nocursor"),500),setTimeout(N(R+" nocursor"),500),setTimeout(S(P+" nocursor"),500);break;case 2:setTimeout(N("button correct"),500),setTimeout(T(v+" nocursor"),500),setTimeout(w(m+" nocursor"),500),setTimeout(S(P+" nocursor"),500);break;case 3:setTimeout(S("button correct"),500),setTimeout(T(v+" nocursor"),500),setTimeout(N(R+" nocursor"),500),setTimeout(w(m+" nocursor"),500)}setTimeout(de,1500)}else switch(Y((function(e){return e-.05})),f("Incorrect"),l[F].choices.indexOf(L)){default:break;case 0:w("button wrong");break;case 1:T("button wrong");break;case 2:N("button wrong");break;case 3:S("button wrong")}},children:"Final Answer?"})}):Object(a.jsx)("div",{})})]}),Object(a.jsx)("div",{className:p,children:p}),Object(a.jsx)("div",{children:"text"===l[F].hintType?Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{onClose:function(){b(!1)},open:i,style:{position:"absolute",border:"2px solid #000",backgroundColor:"gray",boxShadow:"3px solid black",height:"50vh",width:"75vw",margin:"auto",fontFamily:"Verdana",textAlign:"center"},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"From your supervisor:"}),Object(a.jsx)("p",{children:l[F].hint}),Object(a.jsx)("p",{class:"bottomtext",children:"Click anywhere to close."})]})})}):Object(a.jsx)("div",{})})]})}return F===l.length?Object(a.jsx)("form",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Your Final Research Funding"}),Object(a.jsx)("p",{class:"finalprice",children:"\xa3 ".concat((M/F*h[F-1].replaceAll(",","")).toFixed(2))}),Object(a.jsx)("button",{type:"button",onClick:function(){Q((function(e){return e+1}))},children:"Try Again"})]})}):F===l.length+1?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{class:"StartLogo",children:[Object(a.jsx)("h1",{children:"Who Wants to be a Researcher?"}),Object(a.jsx)("img",{class:"start",src:n(7),alt:"The Who Wants to be a Researcher Logo"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Rules"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"You've a researcher looking to gather funding for your PCR lab. Luckily, your supervisor has entered you into a quiz competition, in which you could win \xa31,000,000 worth of funding!"}),Object(a.jsx)("li",{children:"During the competition, your funding increases for each correct answer. However, you will lose some funding if you get a question wrong."}),Object(a.jsxs)("li",{children:["You're allowed to use lifelines to help you answer a question. The lifelines include:",Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"50:50 - remove two incorrect answers."}),Object(a.jsx)("li",{children:"Phone your supervisor - call your supervisor for a hint. The hint may be a short text or a video."}),Object(a.jsx)("li",{children:"Ask the audience - Make a poll of your colleagues' opinions."}),Object(a.jsx)("li",{children:"Ask RA - Ask your research assistant."})]})]}),Object(a.jsx)("li",{children:"The quiz will include content in the videos above, so please watch them!"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{class:"Start",type:"button",onClick:function(){clearTimeout(),Y(0),G(""),Q(0),w("button"),T("button"),N("button"),S("button"),f("NoAnswer"),U("fif"),$("call"),ce("poll"),be("ra")},children:"Start"})]})]}):void 0}var d=document.getElementById("root");Object(i.createRoot)(d).render(Object(a.jsx)(c.StrictMode,{children:Object(a.jsx)(b,{})}))},7:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Who_wants_to_be.5875ca80.png"}},[[18,1,2]]]);
//# sourceMappingURL=main.94d72fd2.chunk.js.map