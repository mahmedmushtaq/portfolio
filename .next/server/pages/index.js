"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(377);
;// CONCATENATED MODULE: external "react-feather"
const external_react_feather_namespaceObject = require("react-feather");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/UIWidgets/Button/index.tsx


const Button = ({ text , icon , className , variant ="contained" , center  })=>{
    const bg = variant === "contained" ? "bg-lsecondary" : "";
    const textColor = variant === "contained" ? "text-lbg" : "";
    const centerBtn = center ? "mx-auto" : "";
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("button", {
        className: `border-solid border-2 p-4 border-lprimary rounded-xl ${bg} ${textColor} flex ${className} ${centerBtn}`,
        children: [
            text,
            " ",
            icon
        ]
    });
};
/* harmony default export */ const UIWidgets_Button = (Button);

;// CONCATENATED MODULE: ./src/components/UIWidgets/Headings/H2.tsx


const H2 = ({ children , className =""  })=>{
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
        className: `text-4xl font-gilroyBold ${className}`,
        children: children
    });
};
/* harmony default export */ const Headings_H2 = (H2);

;// CONCATENATED MODULE: ./src/components/UIWidgets/Headings/H3.tsx


const H3 = ({ children , className ="" , bold , size =""  })=>{
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h3", {
        className: `text-2xl font-gilroy${bold ? "Bold" : ""} ${className}`,
        children: children
    });
};
/* harmony default export */ const Headings_H3 = (H3);

;// CONCATENATED MODULE: ./src/components/UIWidgets/Paragraph/index.tsx

const P = ({ children , className ="" , top =5  })=>{
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
        className: `mt-${top} font-p ${className}`,
        children: children
    });
};
/* harmony default export */ const Paragraph = (P);

;// CONCATENATED MODULE: ./src/components/UIWidgets/Animations/Slide.tsx


const Slide = (props)=>{
    const { children , showSlide , wrapperClassName ="" , slideDirection  } = props;
    const visibilityDirection = slideDirection === "bottomTop" ? "translate-y-full" : "-translate-y-full";
    const { 0: componentVisibility , 1: setComponentVisibility  } = (0,external_react_.useState)(visibilityDirection); // hide className
    const { 0: componentHeight , 1: setComponentHeight  } = (0,external_react_.useState)("h-0");
    (0,external_react_.useEffect)(()=>{
        const className = !!showSlide ? "translate-y-0" : visibilityDirection;
        setComponentVisibility(className);
        if (className !== "translate-y-0") {
            setComponentHeight(0);
        } else {
            setComponentHeight("100%");
        }
    }, [
        showSlide
    ]);
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        className: "overflow-hidden",
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            className: `trasition ease-in-out duration-1000 transform ${componentVisibility} ${wrapperClassName}`,
            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                style: {
                    height: componentHeight
                },
                className: `transition-all duration-1000`,
                children: children
            })
        })
    });
};
/* harmony default export */ const Animations_Slide = (Slide);

;// CONCATENATED MODULE: ./src/components/UIWidgets/ProgressBar/index.tsx

const ProgressBar = ({ percentage  })=>{
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            className: "w-full bg-lsecondary rounded-full h-2.5",
            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "bg-lprimary h-2.5 rounded-full",
                style: {
                    width: `${percentage}%`
                }
            })
        })
    });
};
/* harmony default export */ const UIWidgets_ProgressBar = (ProgressBar);

;// CONCATENATED MODULE: ./src/components/UIWidgets/AccordionWidget/index.tsx




const Accordion = ({ heading , description , children , icon  })=>{
    const { 0: isOpened , 1: setOpened  } = (0,external_react_.useState)(false);
    const { 0: height , 1: setHeight  } = (0,external_react_.useState)("0px");
    const contentElement = (0,external_react_.useRef)(null);
    const HandleOpening = ()=>{
        setOpened(!isOpened);
        setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
    };
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        className: "cursor-pointer",
        onClick: HandleOpening,
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "flex justify-center text-white",
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "mt-2 mr-2",
                    children: icon
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H2, {
                            className: "!text-lg",
                            children: heading
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                            className: "!mt-0",
                            children: description
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                            ref: contentElement,
                            style: {
                                height: height
                            },
                            className: "overflow-hidden transition-all duration-1000",
                            children: children
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: " cursor-pointer",
                    children: isOpened ? /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.ChevronUp, {}) : /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.ChevronDown, {})
                })
            ]
        })
    });
};
/* harmony default export */ const AccordionWidget = (Accordion);

;// CONCATENATED MODULE: ./src/common/hooks/useToCheckOutSideClick.tsx

const useToCheckOutSideClick = (props)=>{
    const { ref , onClick , dependencies  } = props;
    (0,external_react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (ref.current && !ref.current.contains(event.target)) {
                onClick(true);
            // if (!event.target.classList.include(exludeClass)) {
            //
            // }
            //console.log(event.target.classList);
            // outsideClick
            }
        };
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        dependencies
    ]);
};
/* harmony default export */ const hooks_useToCheckOutSideClick = (useToCheckOutSideClick);

;// CONCATENATED MODULE: ./src/components/UIWidgets/Drawer/index.tsx




const fontStyle = {
    fontFamily: "Gilroy-bold"
};
const Drawer = (props)=>{
    const { children , showDrawer , setShowDrawer  } = props;
    const ref = (0,external_react_.useRef)(null);
    hooks_useToCheckOutSideClick({
        ref,
        dependencies: [
            showDrawer
        ],
        onClick: (value)=>{
            if (showDrawer && value) {
                setShowDrawer(false);
            }
        }
    });
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Animations_Slide, {
        showSlide: showDrawer,
        wrapperClassName: "left-0 z-50 bg-lbg w-screen fixed bottom-0",
        slideDirection: "bottomTop",
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            ref: ref,
            className: "shadow-inner p-3 bg-white",
            children: children
        })
    });
};
/* harmony default export */ const UIWidgets_Drawer = (Drawer);

;// CONCATENATED MODULE: ./src/components/UIWidgets/Container/index.tsx

const Container = ({ children , className  })=>{
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        style: {
            maxWidth: 1334,
            margin: "0 auto"
        },
        className: `md:px-8 lg:px-20 ${className}`,
        children: children
    });
};
/* harmony default export */ const UIWidgets_Container = (Container);

;// CONCATENATED MODULE: ./src/components/UIWidgets/Card/index.tsx

const Card = ({ children , className  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: `shadow-inner p-3 bg-white ${className}`,
        children: children
    });
};
/* harmony default export */ const UIWidgets_Card = ((/* unused pure expression or super */ null && (Card)));

;// CONCATENATED MODULE: ./src/components/UIWidgets/Hidden/index.tsx

const Hidden = ({ children , hidden  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: `${hidden}:hidden`,
        children: children
    });
};
/* harmony default export */ const UIWidgets_Hidden = ((/* unused pure expression or super */ null && (Hidden)));

;// CONCATENATED MODULE: ./src/components/UIWidgets/Stepper/index.tsx



const Stepper = ({ children , circleSize =20  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: "flex flex-row",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.Circle, {
                        className: "mr-2",
                        fill: "#003060",
                        size: circleSize
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                        className: `md:hidden h-full bg-lprimary ml-2`,
                        style: {
                            width: 2
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "pb-10 -mt-2",
                children: children
            })
        ]
    });
};
/* harmony default export */ const UIWidgets_Stepper = (Stepper);

;// CONCATENATED MODULE: ./src/components/UIWidgets/index.ts













;// CONCATENATED MODULE: ./src/components/Home/Header/index.tsx




const iconList = [
    {
        id: 1,
        icon: external_react_feather_namespaceObject.Twitter,
        href: "https://twitter.com/MAhmedMushtaq3"
    },
    {
        id: 2,
        icon: external_react_feather_namespaceObject.GitHub,
        href: "https://github.com/mahmedmushtaq"
    },
    {
        id: 3,
        icon: external_react_feather_namespaceObject.Linkedin,
        href: "https://www.linkedin.com/in/m-ahmed-mushtaq/"
    }, 
];
const Header = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const MyProfile = /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        className: "self-start md:mt-12",
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
            src: "/assets/me_pic.png",
            alt: "My Pic",
            className: "w-52 lg:w-72",
            style: {
                borderRadius: 200
            }
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        id: "home",
        className: "flex flex-col md:flex-row justify-between lg:items-center my-20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "flex lg:mt-0 md:mt-16 justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                        className: "mt-3 md:mt-0",
                        children: iconList.map((item)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                href: item.href,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(item.icon, {
                                    className: "mt-5 cursor-pointer hover:text-lprimary",
                                    size: 35
                                })
                            }, item.id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "block md:hidden mx-auto",
                        children: [
                            " ",
                            MyProfile
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "mt-7 md:px-10 md:basis-3/6",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H2, {
                        children: t("home:hi_iam_ahmed")
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H3, {
                        className: "mt-2",
                        children: t("home:full_stack_developer")
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                        children: t("home:about_me_description")
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                        className: "mt-5",
                        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                            href: "https://www.linkedin.com/in/m-ahmed-mushtaq/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(UIWidgets_Button, {
                                text: t("common:contact_me"),
                                icon: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.Send, {
                                    className: "ml-3"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(Headings_H3, {
                            bold: true,
                            className: "!text-lg mt-16 text-lprimary flex items-center hover:text-lsecondary cursor-pointer",
                            children: [
                                t("home:scroll_down"),
                                " ",
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.ArrowDownCircle, {
                                    className: "ml-2"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "hidden md:block",
                children: [
                    " ",
                    MyProfile
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_Header = (Header);

;// CONCATENATED MODULE: external "react-scroll-into-view"
const external_react_scroll_into_view_namespaceObject = require("react-scroll-into-view");
var external_react_scroll_into_view_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_into_view_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Home/TopBar/list.ts

const topBarIconsList = (t)=>[
        {
            id: 1,
            component: external_react_feather_namespaceObject.Home,
            heading: t("common:home"),
            link: "#home"
        },
        {
            id: 2,
            component: external_react_feather_namespaceObject.Info,
            heading: t("common:info"),
            link: "#info"
        },
        {
            id: 3,
            component: external_react_feather_namespaceObject.Briefcase,
            heading: t("common:skills"),
            link: "#skills"
        },
        {
            id: 5,
            component: external_react_feather_namespaceObject.Image,
            heading: t("common:portfolio"),
            link: "#portfolio"
        },
        {
            id: 6,
            component: external_react_feather_namespaceObject.Send,
            heading: t("common:contact_me"),
            link: "#contactme"
        }, 
    ];

;// CONCATENATED MODULE: ./src/components/Home/TopBar/TopBarDrawer.tsx






const TopBarDrawer = ({ showDrawer , setShowDrawer , toggleDrawer  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const list = topBarIconsList(t);
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(UIWidgets_Drawer, {
        showDrawer: showDrawer,
        setShowDrawer: setShowDrawer,
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "grid grid-cols-3 ",
                    children: list.map((item)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx((external_react_scroll_into_view_default()), {
                            selector: item.link,
                            children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(item.component, {
                                        className: "mx-auto cursor-pointer hover:text-lprimary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h3", {
                                        className: "text-sm font-p",
                                        children: item.heading
                                    })
                                ]
                            }, item.id)
                        }, item.id))
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.X, {
                        className: "ml-auto mr-7 cursor-pointer",
                        onClick: toggleDrawer
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const TopBar_TopBarDrawer = (TopBarDrawer);

;// CONCATENATED MODULE: ./src/components/Home/TopBar/TopBarForLaptop.tsx





const TopBar = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const list = topBarIconsList(t);
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: "flex mt-5 mb-16",
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H2, {
                    className: "!text-2xl",
                    children: "Ahmed"
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "ml-auto flex",
                children: list.map((item)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx((external_react_scroll_into_view_default()), {
                        selector: item.link,
                        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H3, {
                            className: "!text-lg mx-3 cursor-pointer hover:text-lprimary",
                            bold: true,
                            children: item.heading
                        })
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const TopBarForLaptop = (TopBar);

;// CONCATENATED MODULE: ./src/components/Home/TopBar/index.tsx






const TopBar_TopBar = ()=>{
    const { 0: showDrawer , 1: setShowDrawer  } = (0,external_react_.useState)(false);
    const toggleDrawer = ()=>{
        setShowDrawer(!showDrawer);
    };
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "block md:hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(TopBar_TopBarDrawer, {
                        showDrawer: showDrawer,
                        setShowDrawer: setShowDrawer,
                        toggleDrawer: toggleDrawer
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "fixed z-40 bottom-0 py-4 px-7 w-full left-0 flex bg-lbg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H3, {
                                className: "text-",
                                children: "Ahmed"
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                className: "flex items-center ml-auto",
                                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.Grid, {
                                    className: "cursor-pointer",
                                    onClick: toggleDrawer
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(TopBarForLaptop, {})
            })
        ]
    });
};
/* harmony default export */ const Home_TopBar = (TopBar_TopBar);

;// CONCATENATED MODULE: ./src/components/Home/AboutMe/index.tsx




const shortAboutMeIntro = [
    {
        id: 1,
        headingCount: "04+"
    },
    {
        id: 2,
        headingCount: "20+"
    },
    {
        id: 3,
        headingCount: "05+"
    }, 
];
const AboutMe = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        id: "info",
        className: "bg-lprimary px-4 py-12 md:p-12 text-lbg mt-40",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H2, {
                        className: "md:!text-5xl mb-2",
                        children: t("home:about_me")
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H3, {
                        className: "!text-lg",
                        children: t("home:my_introduction")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                className: "",
                children: t("home:my_introduction_description")
            }),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "my-5 md:px-12",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                        className: "flex justify-between ",
                        children: shortAboutMeIntro.map((item)=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "flex md:flex-row flex-col items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H2, {
                                        className: "!text-2xl lg:!text-4xl mr-4",
                                        children: item.headingCount
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                                        className: "!mt-0 text-sm",
                                        children: t("home:years_experience")
                                    })
                                ]
                            }, item.id))
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                        className: "mt-10",
                        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                            href: "https://drive.google.com/file/d/1ccNTxsN9rAMnFRQRlWbr-90P077JvyFG/view?usp=sharing",
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(UIWidgets_Button, {
                                text: t("home:download_cv"),
                                className: "mx-auto",
                                icon: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.DownloadCloud, {
                                    className: "ml-3"
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_AboutMe = (AboutMe);

;// CONCATENATED MODULE: ./src/template/BasicLayout.tsx


const BasicLayout = ({ heading , secondaryHeading , children , contentTopMargin =5 , className ="" , id  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        id: id,
        className: `mt-16 ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H2, {
                        className: "md:!text-5xl ",
                        children: heading
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H3, {
                        className: "!text-lg",
                        children: secondaryHeading
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: `mt-${contentTopMargin}`,
                children: children
            })
        ]
    });
};
/* harmony default export */ const template_BasicLayout = (BasicLayout);

;// CONCATENATED MODULE: ./src/components/Home/Skills/SkillListItem.tsx


const SkillListItem = (props)=>{
    const { listIcon , listHeading , listDescription , list  } = props;
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        className: "my-6 mx-auto w-full",
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(AccordionWidget, {
            icon: listIcon,
            heading: listHeading,
            description: listDescription,
            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "py-4",
                children: list.map((skill)=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H3, {
                                className: "!text-sm",
                                children: skill.heading
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(UIWidgets_ProgressBar, {
                                percentage: skill.percentage
                            })
                        ]
                    }, skill.id))
            })
        })
    });
};
/* harmony default export */ const Skills_SkillListItem = (SkillListItem);

;// CONCATENATED MODULE: ./src/components/Home/Skills/skills.ts

const mySkillsList = (t)=>[
        {
            id: 1,
            icon: external_react_feather_namespaceObject.Code,
            heading: "Frontend Development",
            description: t("home:more_than_years_of_experience").replace("{{0}}", "4"),
            list: [
                {
                    id: 1,
                    heading: "HTML, CSS, JAVASCRIPT",
                    percentage: 97
                },
                {
                    id: 2,
                    heading: "Typescript, webpack, babel",
                    percentage: 85
                },
                {
                    id: 3,
                    heading: "React, React Native",
                    percentage: 100
                },
                {
                    id: 4,
                    heading: "Next",
                    percentage: 98
                },
                {
                    id: 5,
                    heading: "Web3",
                    percentage: 80
                },
                {
                    id: 6,
                    heading: "AWS",
                    percentage: 85
                },
                {
                    id: 7,
                    heading: "WordPress",
                    percentage: 100
                },
                {
                    id: 8,
                    heading: "Shopify",
                    percentage: 100
                },
                {
                    id: 9,
                    heading: "Unit Testing",
                    percentage: 100
                }, 
            ]
        },
        {
            id: 2,
            icon: external_react_feather_namespaceObject.FileText,
            heading: "Backend Development",
            description: t("home:more_than_years_of_experience").replace("{{0}}", "4"),
            list: [
                {
                    id: 1,
                    heading: "Node, Express",
                    percentage: 97
                },
                {
                    id: 2,
                    heading: "AWS, GCP",
                    percentage: 85
                },
                {
                    id: 3,
                    heading: "Microservices Architecture",
                    percentage: 99
                },
                {
                    id: 4,
                    heading: "Laravel",
                    percentage: 80
                },
                {
                    id: 8,
                    heading: "Unit Testing",
                    percentage: 100
                }, 
            ]
        },
        {
            id: 3,
            icon: external_react_feather_namespaceObject.Database,
            heading: "Databases",
            description: t("home:more_than_years_of_experience").replace("{{0}}", "4"),
            list: [
                {
                    id: 1,
                    heading: "MongoDB",
                    percentage: 97
                },
                {
                    id: 2,
                    heading: "MySql",
                    percentage: 95
                },
                {
                    id: 4,
                    heading: "PostgreSql",
                    percentage: 80
                }, 
            ]
        },
        {
            id: 4,
            icon: external_react_feather_namespaceObject.Box,
            heading: "Blockchain",
            description: t("home:more_than_years_of_experience").replace("{{0}}", "2"),
            list: [
                {
                    id: 1,
                    heading: "Solidity",
                    percentage: 97
                },
                {
                    id: 2,
                    heading: "Ganache",
                    percentage: 95
                },
                {
                    id: 4,
                    heading: "Truffle",
                    percentage: 80
                },
                {
                    id: 5,
                    heading: "Web3",
                    percentage: 100
                }, 
            ]
        }, 
    ];
/* harmony default export */ const skills = (mySkillsList);

;// CONCATENATED MODULE: ./src/components/Home/Skills/index.tsx





const Skills = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(template_BasicLayout, {
        heading: t("home:my_skills"),
        secondaryHeading: t("home:my_technical_level"),
        contentTopMargin: 12,
        className: "mt-28",
        id: "skills",
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 md:gap-4",
            children: skills(t).map((list)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Skills_SkillListItem, {
                    listIcon: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(list.icon, {}),
                    list: list.list,
                    listHeading: list.heading,
                    listDescription: list.description
                }, list.id))
        })
    });
};
/* harmony default export */ const Home_Skills = (Skills);

;// CONCATENATED MODULE: ./src/components/Home/Qualifications/list.ts
const technologies_which_i_used = (t)=>t("home:technologies_which_i_used");
const qualificationsList = (t)=>[
        {
            id: "smodin-io",
            heading: "Full Stack developer at Smodin.io",
            date: "Feb 2022 - Present",
            technologiesList: `${t("home:technologies_which_i_am_using")} - Next, GCP, Firebase, MUI`
        },
        {
            id: "foreseer-co",
            heading: "Front End developer at Foreseer.co ( Freelance )",
            date: "Dec 2021- Jan 2022",
            technologiesList: `${technologies_which_i_used(t)}:- React, React Native, AWS amplify, dynamoDB`
        },
        {
            id: "actual-ly",
            heading: " Full-stack developer at Actual.ly ( Contract )",
            date: "Mar 2021- Sep 2021",
            technologiesList: `${technologies_which_i_used(t)}:- React, AWS serverless, dynamoDB, Node, Twilio`
        },
        {
            id: "upwork-freelance",
            heading: "Freelancer at Upwork ( Freelance, Contract )",
            date: "Jan 2020- Feb 2021",
            technologiesList: `${technologies_which_i_used(t)}:- TypeScript, React, React Native, Node.js, MondoDB, MySql, Next.js, Testing,  GraphQL, AWS ( amplify, serverless, dynamodb, kinesis video streaming ) `
        },
        {
            id: "orthiya-tec",
            heading: "Full-stack developer at orthiya technology ( Contract )",
            date: "May 2020 - Aug 2020",
            technologiesList: `${technologies_which_i_used(t)} React, Node.js, MongoDB, GraphQL, Website Scrapping, Laravel, MySql, Next.js, Testing`
        },
        {
            id: "contest-app",
            heading: "Full-stack developer at Contest",
            date: "Sep 2017 - June 2019",
            technologiesList: `${technologies_which_i_used(t)} Android, Java, Php, MySql, Firebase, Node.js, Restful web services, Testing`
        }, 
    ];

;// CONCATENATED MODULE: ./src/components/Home/Qualifications/index.tsx





const Qualtifications = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(template_BasicLayout, {
        heading: t("home:past_experience"),
        secondaryHeading: t("home:my_personal_journey"),
        className: "mt-28",
        id: "qualifications",
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            className: "md:grid grid-cols-2 gap-4 mt-20",
            children: qualificationsList(t).map((list, i)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(UIWidgets_Stepper, {
                    children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "w-4/5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H2, {
                                className: "!text-lg",
                                children: list.heading
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                                className: "!mt-1 text-sm",
                                children: list.date
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                                className: "text-sm",
                                children: list.technologiesList
                            })
                        ]
                    })
                }, list.id))
        })
    });
};
/* harmony default export */ const Qualifications = (Qualtifications);

;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
;// CONCATENATED MODULE: ./src/components/Home/Portfolio/portfoliolist.ts
const portfolioList = (t)=>[
        {
            id: "1",
            imgSrc: "https://i.ibb.co/ZN9n1k4/texthotline2.png",
            heading: "Vaccination Booking System",
            link: "https://texthotline.com",
            description: t("home:vaccination_booking_system_info")
        },
        {
            id: "1-3",
            imgSrc: "https://i.ibb.co/WGQy5C2/influencer-web-1.png",
            heading: "Hire Influencers",
            link: "https://github.com/mahmedmushtaq/findinfluencers",
            description: t("home:hire_influencers_info")
        },
        {
            id: "1-4",
            imgSrc: "https://i.ibb.co/XjyH6Cc/nft-marketplace.png",
            heading: "KryptoBirdz ( NFT marketplace )",
            link: "https://github.com/mahmedmushtaq/nft-marketplace",
            description: t("home:krypto_birdz_marketplace_info")
        },
        {
            id: "5",
            imgSrc: "https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg",
            heading: "Kickstart Clone ( Smart Contract based )",
            description: t("home:kickstart_clone_info"),
            link: "https://github.com/mahmedmushtaq/kickstart"
        },
        {
            id: "1-2",
            imgSrc: "https://i.ibb.co/tZ6Srf4/hot1ine2.png",
            heading: "Hot1ine.com",
            link: "https://hot1ine.com",
            description: t("home:hot1ine_info")
        },
        {
            id: "2",
            imgSrc: "https://raw.githubusercontent.com/mahmedmushtaq/martsnp/master/templateimages/1.PNG",
            heading: "MartSnp - Ecommerce Website",
            link: "https://github.com/mahmedmushtaq/martsnp",
            description: t("home:martsnp_info")
        },
        {
            id: "3",
            imgSrc: "https://i.ibb.co/dpbFvck/natour.png",
            heading: "Travelling website",
            link: "https://mahmedmushtaq.github.io/natour/",
            description: t("home:travelling_info")
        },
        {
            id: "5",
            imgSrc: "https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg",
            heading: "Ticket Selling Platform",
            description: t("home:ticket_selling_info"),
            link: "https://github.com/mahmedmushtaq/ticketing-project"
        }, 
    ];

;// CONCATENATED MODULE: ./src/components/Home/Portfolio/PortfolioItem.tsx



const PortfolioItem = (props)=>{
    const { heading , imgSrc , description , link , btnText  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: "md:flex justify-around items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H3, {
                        bold: true,
                        className: "pb-3",
                        children: heading
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                        alt: "Portfolio",
                        style: {
                            width: 400
                        },
                        src: imgSrc
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: " basis-2/4 px-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                        className: "text-left",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                        href: link,
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(UIWidgets_Button, {
                            text: btnText,
                            variant: "outlined",
                            icon: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.ArrowRight, {
                                className: "ml-2"
                            }),
                            className: "!mt-3 !py-2 px-5"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Portfolio_PortfolioItem = (PortfolioItem);

;// CONCATENATED MODULE: ./src/components/Home/Portfolio/index.tsx








const Portfolio = ()=>{
    const { 0: selectedItem , 1: setSelectedItem  } = (0,external_react_.useState)(0);
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const list = portfolioList(t);
    const nextItem = ()=>{
        const next = selectedItem + 1;
        setSelectedItem(next % list.length);
    };
    const previousItem = ()=>{
        let next = selectedItem - 1;
        if (next < 0) next = list.length - 1;
        setSelectedItem(next % list.length);
    };
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(template_BasicLayout, {
        heading: t("common:portfolio"),
        secondaryHeading: t("home:my_word"),
        contentTopMargin: 0,
        id: "portfolio",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "relative mt-5 md:mt-0",
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "absolute right-0 z-30 h-full flex items-center",
                    onClick: nextItem,
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.ChevronRight, {
                        className: "cursor-pointer ",
                        size: 35
                    })
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "w-11/12 mx-auto",
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_responsive_carousel_namespaceObject.Carousel, {
                        showIndicators: false,
                        showArrows: false,
                        swipeable: false,
                        selectedItem: selectedItem,
                        children: list.map((item)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Portfolio_PortfolioItem, {
                                btnText: t("home:visit"),
                                ...item
                            }, item.id))
                    })
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "absolute top-0 left-0 w-fit inset-1/2 z-30 h-full flex items-center",
                    onClick: previousItem,
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_feather_namespaceObject.ChevronLeft, {
                        className: "cursor-pointer",
                        size: 35
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Home_Portfolio = (Portfolio);

;// CONCATENATED MODULE: ./src/components/Home/ContactMe/index.tsx




const ContactMe = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        id: "contactme",
        className: "bg-lprimary text-lbg",
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(template_BasicLayout, {
            heading: t("common:contact_me"),
            className: "!mt-5 px-7 py-16",
            secondaryHeading: "Contact Me Now, So we can discuss your requirements in more details",
            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                href: "https://www.linkedin.com/in/m-ahmed-mushtaq/",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(UIWidgets_Button, {
                    text: t("common:contact_me"),
                    center: true
                })
            })
        })
    });
};
/* harmony default export */ const Home_ContactMe = (ContactMe);

;// CONCATENATED MODULE: ./src/components/Home/Testimonials/TestimonialItem.tsx


const TestimonialItem = ({ imgSrc , clientName , companyName , review  })=>{
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        className: "text-left",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                        alt: "My Client",
                        src: imgSrc,
                        style: {
                            borderRadius: 50,
                            width: 100
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "ml-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H3, {
                            bold: true,
                            children: clientName
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                            top: 0,
                            children: companyName
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                            top: 2,
                            children: review
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Testimonials_TestimonialItem = (TestimonialItem);

;// CONCATENATED MODULE: ./src/components/Home/Testimonials/list.ts
const testimonialsReview = (t)=>[
        {
            id: 1,
            clientName: "Chang Wook Lee",
            companyName: "Foreseer.co",
            imgSrc: "/assets/client_chang.jpg",
            review: t("home:chang_wook_lee_review")
        },
        {
            id: 2,
            clientName: "Saad Malik",
            companyName: "Orthiya Technology",
            imgSrc: "/assets/client_saad.jpg",
            review: t("home:saad_malik_review")
        }, 
    ];

;// CONCATENATED MODULE: ./src/components/Home/Testimonials/index.tsx


 // requires a loader




const Testimonials = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(template_BasicLayout, {
        heading: t("home:testimonials"),
        secondaryHeading: t("home:my_clients_saying"),
        contentTopMargin: 12,
        className: "mt-28",
        id: "testimonials",
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "hidden md:grid grid-cols-2",
                children: testimonialsReview(t).map((item)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Testimonials_TestimonialItem, {
                        ...item
                    }, item.id))
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "block md:hidden",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(external_react_responsive_carousel_namespaceObject.Carousel, {
                    children: testimonialsReview(t).map((item)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Testimonials_TestimonialItem, {
                            ...item
                        }, item.id))
                })
            })
        ]
    });
};
/* harmony default export */ const Home_Testimonials = (Testimonials);

;// CONCATENATED MODULE: ./src/components/Home/Footer/list.tsx

const footerList = (t)=>[
        {
            id: 1,
            heading: t("common:about_me"),
            link: "#info"
        },
        {
            id: 2,
            heading: t("common:portfolio"),
            link: "#portfolio"
        },
        {
            id: 3,
            heading: t("common:contact_me"),
            link: "#contactme"
        }, 
    ];
const footerFollowMeIcon = [
    {
        id: 1,
        icon: external_react_feather_namespaceObject.Facebook,
        href: "https://www.facebook.com/mahmedmushtaq12/"
    },
    {
        id: 3,
        icon: external_react_feather_namespaceObject.Twitter,
        href: "https://twitter.com/MAhmedMushtaq3"
    },
    {
        id: 4,
        icon: external_react_feather_namespaceObject.Linkedin,
        href: "https://www.linkedin.com/in/m-ahmed-mushtaq/"
    },
    {
        id: 5,
        icon: external_react_feather_namespaceObject.GitHub,
        href: "https://github.com/mahmedmushtaq"
    }, 
];

;// CONCATENATED MODULE: ./src/components/Home/Footer/index.tsx





const Footer = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const list = footerList(t);
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        id: "footer",
        className: "text-lbg px-7 py-10 pb-20 bg-lprimary",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(UIWidgets_Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "flex flex-col md:flex-row justify-between items-start",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H3, {
                                    bold: true,
                                    children: "M Ahmed Mushtaq"
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                                    top: 2,
                                    children: t("common:full_stack_developer")
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                                    top: 2,
                                    className: "mb-5",
                                    children: "mahmedmushtaq296@gmail.com"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                            className: "flex flex-col md:flex-row ",
                            children: list.map((item)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx((external_react_scroll_into_view_default()), {
                                    selector: item.link,
                                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Paragraph, {
                                        top: 2,
                                        className: "mr-4 cursor-pointer",
                                        children: item.heading
                                    })
                                }, item.id))
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                            className: "flex mt-12 md:mt-0",
                            children: footerFollowMeIcon.map((item)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                    href: item.href,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(item.icon, {
                                        className: "mr-4 cursor-pointer"
                                    }, item.id)
                                }, item.id))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "mt-12 text-center",
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Headings_H3, {
                        bold: true,
                        children: t("common:all_rights_reserved")
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Home_Footer = (Footer);

;// CONCATENATED MODULE: external "next-i18next/serverSideTranslations"
const serverSideTranslations_namespaceObject = require("next-i18next/serverSideTranslations");
;// CONCATENATED MODULE: ./pages/index.tsx












const Home = ({ locale  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: "bg-lbg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "px-7 bg-lbg",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Home_TopBar, {}),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(UIWidgets_Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Home_Header, {}),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Home_AboutMe, {}),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Home_Skills, {}),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Qualifications, {}),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Home_Portfolio, {}),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Home_ContactMe, {}),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Home_Testimonials, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: "mt-28",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Home_Footer, {})
            })
        ]
    });
};
async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_namespaceObject.serverSideTranslations)(locale, [
                "home",
                "common"
            ])
        }
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(439));
module.exports = __webpack_exports__;

})();