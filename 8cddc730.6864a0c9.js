(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),o=(a(0),a(87)),r={id:"working-with-data",title:"Working with Data",sidebar_label:"Working with Data"},c={unversionedId:"tutorials/working-with-data",id:"tutorials/working-with-data",isDocsHomePage:!1,title:"Working with Data",description:"The two most important data structures when working with data in lit-pod are the Thing and the LitDataset:",source:"@site/docs/tutorials/working-with-data.md",permalink:"/lit-pod/docs/tutorials/working-with-data",editUrl:"https://github.com/inrupt/lit-pod/edit/master/website/docs/tutorials/working-with-data.md",sidebar_label:"Working with Data",sidebar:"prose",previous:{title:"Getting Started with lit-pod",permalink:"/lit-pod/docs/"},next:{title:"Working with Files",permalink:"/lit-pod/docs/tutorials/working-with-files"}},s=[{value:"Reading data",id:"reading-data",children:[{value:"1. Fetch a LitDataset",id:"1-fetch-a-litdataset",children:[]},{value:"2. Obtain a Thing",id:"2-obtain-a-thing",children:[]},{value:"3. Read data",id:"3-read-data",children:[]},{value:"Reading data - full example",id:"reading-data---full-example",children:[]}]},{value:"Writing data",id:"writing-data",children:[{value:"1. Add data to a Thing",id:"1-add-data-to-a-thing",children:[]},{value:"2. Insert the Thing into a LitDataset",id:"2-insert-the-thing-into-a-litdataset",children:[]},{value:"3. Send the LitDataset to a Pod",id:"3-send-the-litdataset-to-a-pod",children:[]},{value:"Saving data - full example",id:"saving-data---full-example",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The two most important data structures when working with data in lit-pod are the ",Object(o.b)("inlineCode",{parentName:"p"},"Thing")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"LitDataset"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_interfaces_#thing"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"Thing")))," is the most basic store of data about a particular subject.\nEach Thing has its own URL to identify it. For example, the URL of the Thing about yours truly is:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"https://vincentt.inrupt.net/profile/card#me"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_interfaces_#litdataset"}),Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"LitDataset")))," is a set of Things.\nIt is primarily useful to be able to store multiple Things at the same location."))),Object(o.b)("p",null,"Typically, all the Things in a LitDataset will have URLs relative to the location of that LitDataset.\nFor example, I could store Things for notes I've taken at ",Object(o.b)("inlineCode",{parentName:"p"},"https://vincent-test.inrupt.net/notes"),", using URLs like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"https://vincent-test.inrupt.net/notes#note1")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"https://vincent-test.inrupt.net/notes#note2")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"https://vincent-test.inrupt.net/notes#note3"))),Object(o.b)("p",null,"I could even add a Thing with the URL of the LitDataset itself, e.g. to keep a list of the notes at that location."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"A note about interoperability")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You might be wondering why we're not working with plain Javascript objects, storing them as JSON.\nAnd while ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/tutorials/working-with-files"}),"you ",Object(o.b)("em",{parentName:"a"},"can")," do that"),", there is one primary advantage of our approach:\n",Object(o.b)("strong",{parentName:"p"},"interoperability"),"."),Object(o.b)("p",{parentName:"div"},"By giving every Thing its own URL, it can be combined with other data by linking to it. For example,\ninstead of users having to manually enter the names of all their contacts, a pointer to the Thing\nrepresenting that contact allows you to re-use the name defined in that Thing."))),Object(o.b)("h2",{id:"reading-data"},"Reading data"),Object(o.b)("p",null,"Reading data in Solid therefore usually consists of the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Fetch the LitDataset that contains the Thing(s) you are interested in."),Object(o.b)("li",{parentName:"ol"},"Obtain the Thing from the resulting LitDataset."),Object(o.b)("li",{parentName:"ol"},"Read the applicable data from that Thing.")),Object(o.b)("p",null,"Let's go over those steps one by one."),Object(o.b)("h3",{id:"1-fetch-a-litdataset"},"1. Fetch a LitDataset"),Object(o.b)("p",null,"To fetch a LitDataset, pass its URL to\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_resource_litdataset_#fetchlitdataset"}),Object(o.b)("inlineCode",{parentName:"a"},"fetchLitDataset")),". Usually, the first LitDataset to\nfetch will be the one at the authenticated user's ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/glossary#webid"}),"WebID"),", which will contain\nlinks to other potentially relevant LitDatasets."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import { fetchLitDataset } from "@solid/lit-pod";\n\nconst litDataset = await fetchLitDataset(\n  "https://example.com/some/interesting/resource"\n);\n')),Object(o.b)("h3",{id:"2-obtain-a-thing"},"2. Obtain a Thing"),Object(o.b)("p",null,"Given a LitDataset, you can either extract a single Thing for which you know its URL (e.g. because\nyou found that URL on another Thing) using\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_thing_thing_#getthingone"}),Object(o.b)("inlineCode",{parentName:"a"},"getThingOne")),", or simply take all the\nThings inside the LitDataset using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_thing_thing_#getthingall"}),Object(o.b)("inlineCode",{parentName:"a"},"getThingAll"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import { getThingOne } from "@solid/lit-pod";\n\nconst thing = getThingOne(\n  litDataset,\n  "https://example.com/some/interesting/resource#thing"\n);\n')),Object(o.b)("h3",{id:"3-read-data"},"3. Read data"),Object(o.b)("p",null,"There are three things to know about data in Solid:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Data is attached to a Thing via a URL that uniquely identifies what of the Thing's characteristics it describes."),Object(o.b)("li",{parentName:"ol"},"Data is typed, e.g. as a string, an integer or a URL (e.g. pointing to other Things)."),Object(o.b)("li",{parentName:"ol"},"There can be zero, one or more values for each characteristic.")),Object(o.b)("p",null,"As an example, in my profile, an app can look for my name using the URL ",Object(o.b)("inlineCode",{parentName:"p"},"http://xmlns.com/foaf/0.1/name"),".\nThis is explicitly understood to be a name, and not just a family name or a given name.\nAdditionally, it is understood that the name is a string, and that something can have more than one\nnames."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Who decides on these URLs?")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The URL is decided on by whomever writes the data, and can be any arbitrary URL.\nHowever, agreeing on a specific URL for specific types of data can make different apps interoperable.\nTo encourage interoperability, people have come together to agree on specific URLs for specific types of data for common use cases \u2014 so-called ",Object(o.b)("em",{parentName:"p"},"Vocabularies"),"."),Object(o.b)("p",{parentName:"div"},'In the above example, the URL is part of the "Friend of a Friend" ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://xmlns.com/foaf/spec"}),"(FOAF) Vocabulary"),".\nIn this case, you can even follow the link to see a description of how they intended ",Object(o.b)("inlineCode",{parentName:"p"},"name")," to be used\n(with a string, possibly multiple ones)."))),Object(o.b)("p",null,"To access data, you use the appropriate function depending on what type of data you expect,\nhow much of it, and pass it the URL that identifies which of the Thing's characteristics you're looking for.\nFor example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import {\n  getStringNoLocaleAll,\n  getStringNoLocaleOne,\n  getUrlAll,\n} from "@solid/lit-pod";\n\n// We\'re looking for data\u2026\n// \u2026stating the Thing\'s name (`http://xmlns.com/foaf/0.1/name`)\n// \u2026of type string\n// \u2026and we expect multiple values:\nconst names = getStringNoLocaleAll(thing, "http://xmlns.com/foaf/0.1/name");\n// => an array of strings representing the `http://xmlns.com/foaf/0.1/name`.\n\n// We\'re looking for data\u2026\n// \u2026stating the Thing\'s Skype ID (`http://xmlns.com/foaf/0.1/skypeId`)\n// \u2026of type string\n// \u2026and we want just one value, assuming it to be the only one:\nconst skypeId = getStringNoLocaleOne(\n  thing,\n  "http://xmlns.com/foaf/0.1/skypeId"\n);\n// => one of the strings representing the `http://xmlns.com/foaf/0.1/skypeId`,\n//    or null if there were none.\n\n// We\'re looking for data\u2026\n// \u2026stating the Thing\'s acquaintances (`http://xmlns.com/foaf/0.1/knows`)\n// \u2026of type URL\n// \u2026and we expect multiple values:\nconst acquaintances = getUrlAll(thing, "http://xmlns.com/foaf/0.1/knows");\n// => an array of URLs, presumably pointing to the Things describing acquaintances.\n')),Object(o.b)("p",null,"For an overview of all data access functions, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_thing_get_"}),Object(o.b)("inlineCode",{parentName:"a"},"thing/get")),"."),Object(o.b)("h3",{id:"reading-data---full-example"},"Reading data - full example"),Object(o.b)("p",null,"Putting it all together, here's an example of fetching the nickname of someone with a known\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/glossary#webid"}),"WebID")," (",Object(o.b)("inlineCode",{parentName:"p"},"https://vincentt.inrupt.net/profile/card#me"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import {\n  fetchLitDataset,\n  getThingOne,\n  getStringNoLocaleOne,\n} from "@solid/lit-pod";\n\nconst profileResource = await fetchLitDataset(\n  "https://vincentt.inrupt.net/profile/card"\n);\n\nconst profile = getThingOne(\n  profileResource,\n  "https://vincentt.inrupt.net/profile/card#me"\n);\n\nconst nickName = getStringNoLocaleOne(\n  profile,\n  "http://xmlns.com/foaf/0.1/nick"\n);\n')),Object(o.b)("h2",{id:"writing-data"},"Writing data"),Object(o.b)("p",null,"The process of writing data is roughly the inverse of the process of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#reading-data"}),"reading data"),".\nThat is to say:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a Thing with the data you want to write."),Object(o.b)("li",{parentName:"ol"},"Insert the Thing into a LitDataset."),Object(o.b)("li",{parentName:"ol"},"Send the LitDataset to a Pod.")),Object(o.b)("p",null,"Again, let's cover them one by one."),Object(o.b)("h3",{id:"1-add-data-to-a-thing"},"1. Add data to a Thing"),Object(o.b)("p",null,"We can start with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#2-obtain-a-thing"}),"a Thing we obtained earlier"),", or create an empty one:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import { createThing } from "@solid/lit-pod";\n\nconst thing = createThing();\n')),Object(o.b)("p",null,"As ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#3-read-data"}),"when reading data"),", we need to know three things about our data:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What URL identifies the characteristic described by this data."),Object(o.b)("li",{parentName:"ol"},"What type it has."),Object(o.b)("li",{parentName:"ol"},"Whether it's the only value of its kind, or one of many.")),Object(o.b)("p",null,"Let's say we're trying to add a nickname, a characteristic identified by ",Object(o.b)("inlineCode",{parentName:"p"},"http://xmlns.com/foaf/0.1/nick"),".\nIt will be a string (",Object(o.b)("inlineCode",{parentName:"p"},'"timbl"'),"), and will be in addition to any existing nicknames already listed in ",Object(o.b)("inlineCode",{parentName:"p"},"thing"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import { addStringNoLocale } from "@solid/lit-pod";\n\nlet updatedThing = addStringNoLocale(\n  thing,\n  `http://xmlns.com/foaf/0.1/nick`,\n  "timbl"\n);\n')),Object(o.b)("p",null,"Alternatively, if we want to replace existing values, we use the ",Object(o.b)("inlineCode",{parentName:"p"},"set*")," functions.\nLikewise, for removing data there are ",Object(o.b)("inlineCode",{parentName:"p"},"remove*")," functions.\nSee which are available for which data type at\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_thing_add_"}),Object(o.b)("inlineCode",{parentName:"a"},"thing/add")),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_thing_set_"}),Object(o.b)("inlineCode",{parentName:"a"},"thing/set"))," and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_thing_remove_"}),Object(o.b)("inlineCode",{parentName:"a"},"thing/remove")),"."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"A heads-up about immutability")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that lit-pod never modifies the objects you provide to it.\nInstead, it will create a new object based on the one it is given,\nwith the requested changes applied."),Object(o.b)("p",{parentName:"div"},"In other words, if you were to read the nickname from ",Object(o.b)("inlineCode",{parentName:"p"},"thing")," in the code snippet above,\nyou would not get the value we just added. Instead, you'll have to read it from ",Object(o.b)("inlineCode",{parentName:"p"},"updatedThing"),"."),Object(o.b)("p",{parentName:"div"},"This makes it easier to write unit tests and gives you more control over state changes,\nbut it ",Object(o.b)("em",{parentName:"p"},"is")," something to keep in mind."))),Object(o.b)("h3",{id:"2-insert-the-thing-into-a-litdataset"},"2. Insert the Thing into a LitDataset"),Object(o.b)("p",null,"After creating a Thing with updated data, we can update a LitDataset with the new Thing.\nIf the updated Thing was based on an existing Thing obtained from that LitDataset,\nthe updated Thing will replace the previous one."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import { setThing } from "@solid/lit-pod";\n\nconst updatedDataset = setThing(litDataset, updatedThing);\n')),Object(o.b)("h3",{id:"3-send-the-litdataset-to-a-pod"},"3. Send the LitDataset to a Pod"),Object(o.b)("p",null,"To save the updated LitDataset to a Pod, use\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_resource_litdataset_#savelitdatasetat"}),Object(o.b)("inlineCode",{parentName:"a"},"saveLitDatasetAt")),".\nIf the given location already contains data, that will be updated to match the given LitDataset."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import { saveLitDatasetAt } from "@solid/lit-pod";\n\nconst savedLitDataset = await saveLitDatasetAt(\n  "https://example.com/some/interesting/resource",\n  updatedDataset\n);\n')),Object(o.b)("h3",{id:"saving-data---full-example"},"Saving data - full example"),Object(o.b)("p",null,"Putting it all together, here's an example of fetching someone's profile, changing their nickname,\nand saving it back:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import {\n  fetchLitDataset,\n  getThingOne,\n  setStringNoLocaleOne,\n  setThing,\n  saveLitDatasetAt,\n} from "@solid/lit-pod";\n\nconst profileResource = await fetchLitDataset(\n  "https://vincentt.inrupt.net/profile/card"\n);\n\nconst profile = getThingOne(\n  profileResource,\n  "https://vincentt.inrupt.net/profile/card#me"\n);\n\nconst updatedProfile = setStringNoLocaleOne(\n  profile,\n  "http://xmlns.com/foaf/0.1/nick",\n  "Your humble tutorial writer"\n);\n\nconst updatedProfileResource = setThing(profileResource, updatedProfile);\n\nconst updatedProfileResource = await saveLitDatasetAt(\n  "https://vincentt.inrupt.net/profile/card",\n  updatedProfileResource\n);\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Writing to a Pod is subject to access restriction:\nif you try to run this ",Object(o.b)("em",{parentName:"p"},"exact")," example it will fail,\nbecause not everyone can write data into ",Object(o.b)("inlineCode",{parentName:"p"},"https://vincentt.inrupt.net/profile/card"),".\nIt is, after all, my personal profile!\nFor more details about access management, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/lit-pod/docs/tutorials/managing-access"}),"Managing Access"),"."))))}p.isMDXComponent=!0},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(r,".").concat(h)]||d[h]||b[h]||o;return a?i.a.createElement(m,c(c({ref:t},l),{},{components:a})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);