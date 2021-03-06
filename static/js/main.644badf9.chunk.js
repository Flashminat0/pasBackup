(this["webpackJsonpstat-cal"] = this["webpackJsonpstat-cal"] || []).push([[0], {
    16: function (t, e, a) {
        "use strict";
        a.r(e);
        var s = a(3), c = a.n(s), n = a(9), r = a.n(n), i = a(1), l = a.n(i), d = a(2), o = a(4), j = a(5), h = a(7),
            u = a(6), b = a(0), m = (s.Component, function (t) {
                Object(h.a)(a, t);
                var e = Object(u.a)(a);

                function a(t) {
                    var s;
                    return Object(o.a)(this, a), (s = e.call(this, t)).handleChange1 = function (t) {
                        s.setState({dataList: t.target.value, disabled: !1})
                    }, s.handleChange2 = function (t) {
                        s.setState({frequencyList: t.target.value, disabled: !1})
                    }, s.frequencyListArrayCreate = Object(d.a)(l.a.mark((function t() {
                        var e, a, c;
                        return l.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    for (c in e = new Array, a = 0, e = s.state.frequencyList.split(",")) e[c] = parseFloat(e[c]), a += e[c];
                                    s.setState({frequencyListArray: e, totalFrequency: a});
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), s.dataListarrayCreate = Object(d.a)(l.a.mark((function t() {
                        var e, a, c;
                        return l.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    for (c in e = new Array, a = 0, e = s.state.dataList.split(",")) e[c] = parseFloat(e[c]), a += e[c];
                                    s.setState({dataListArray: e, totalData: a});
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), s.getMean = Object(d.a)(l.a.mark((function t() {
                        var e, a, c;
                        return l.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, s.dataListarrayCreate();
                                case 2:
                                    return t.next = 4, s.frequencyListArrayCreate();
                                case 4:
                                    for (e = 0, 0, c = 0; c < s.state.dataListArray.length; c++) e += s.state.dataListArray[c] * s.state.frequencyListArray[c];
                                    return a = e / s.state.totalFrequency, s.setState({mean: a}), t.abrupt("return", a);
                                case 10:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), s.getVariance = Object(d.a)(l.a.mark((function t() {
                        var e, a, c, n, r, i;
                        return l.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, s.getMean();
                                case 2:
                                    for (e = t.sent, a = 0, c = s.state.totalFrequency, n = 0; n < s.state.dataListArray.length; n++) a += (s.state.dataListArray[n] - e) * (s.state.dataListArray[n] - e) * s.state.frequencyListArray[n];
                                    console.log(a), r = a / (c - 1), i = a / c, s.setState({
                                        sampleVariance: r,
                                        populationVariance: i
                                    });
                                case 10:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), s.submitHandler = function (t) {
                        t.preventDefault(), s.dataListarrayCreate(), s.frequencyListArrayCreate(), s.getVariance(), s.setState({disabled: !0})
                    }, s.state = {
                        disabled: !1,
                        dataList: "",
                        frequencyList: "",
                        dataListArray: [],
                        frequencyListArray: [],
                        totalFrequency: 0,
                        totalData: 0,
                        mean: 0,
                        sampleVariance: 0,
                        populationVariance: 0
                    }, s
                }

                return Object(j.a)(a, [{
                    key: "render", value: function () {
                        var t = this;
                        return Object(b.jsxs)("div", {
                            className: "container",
                            children: [Object(b.jsx)("h4", {children: "For Frequency Table"}), Object(b.jsx)("hr", {}), Object(b.jsx)("d1", {
                                className: "row", children: Object(b.jsxs)("form", {
                                    children: [Object(b.jsx)("p", {children: "Type your data list and frequency list inside relevant input fields respectively, separated with commas. Dont put spaces "}), Object(b.jsxs)("p", {children: ["eg: data list - ", Object(b.jsx)("i", {children: "1,2,3,4,5   "}), "frequency list -  ", Object(b.jsx)("i", {children: "6,7,8,9,10"})]}), Object(b.jsx)("dd", {
                                        className: "col-sm-3",
                                        children: "Input data list:"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: Object(b.jsx)("input", {
                                            type: "text",
                                            id: "dataList",
                                            onChange: this.handleChange1
                                        })
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-3",
                                        children: "Input frequency list:"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: Object(b.jsx)("input", {
                                            type: "text",
                                            id: "frequencyList",
                                            onChange: this.handleChange2
                                        })
                                    }), Object(b.jsx)("button", {
                                        className: "btn btn-success",
                                        disabled: this.state.disabled,
                                        onClick: this.submitHandler,
                                        children: "Get Answers"
                                    }), Object(b.jsx)("br", {}), Object(b.jsx)("br", {}), Object(b.jsxs)("table", {
                                        class: "table table-bordered",
                                        children: [Object(b.jsx)("thead", {
                                            children: Object(b.jsxs)("tr", {
                                                children: [Object(b.jsx)("th", {
                                                    scope: "col",
                                                    children: "x"
                                                }), Object(b.jsx)("th", {
                                                    scope: "col",
                                                    children: "frequency"
                                                }), Object(b.jsx)("th", {scope: "col", children: "fx"})]
                                            })
                                        }), Object(b.jsxs)("tbody", {
                                            children: [this.state.dataListArray.map((function (e, a) {
                                                return Object(b.jsxs)("tr", {
                                                    children: [Object(b.jsx)("td", {
                                                        scope: "row",
                                                        children: e
                                                    }), Object(b.jsx)("td", {
                                                        scope: "row",
                                                        children: t.state.frequencyListArray[a]
                                                    }), Object(b.jsx)("th", {
                                                        scope: "row",
                                                        children: t.state.frequencyListArray[a] * e
                                                    })]
                                                }, a)
                                            })), Object(b.jsxs)("tr", {
                                                children: [Object(b.jsxs)("th", {
                                                    scope: "row",
                                                    children: ["\u03a3(x) = ", this.state.totalData]
                                                }), Object(b.jsxs)("th", {
                                                    scope: "row",
                                                    children: ["\u03a3(f) = ", this.state.totalFrequency]
                                                }), Object(b.jsxs)("th", {
                                                    scope: "row",
                                                    children: ["\u03a3(fx) = ", this.state.totalFrequency * this.state.totalData]
                                                })]
                                            })]
                                        })]
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Mean"
                                    }), Object(b.jsxs)("dd", {
                                        className: "col-sm-9",
                                        children: ["\u03a3(fx)/\u03a3(f) = ", this.state.mean]
                                    }), Object(b.jsx)("br", {}), Object(b.jsx)("p", {children: "If the question does not mention if sample or population, GET SAMPLE VALUES. DEFAULT IS SAMPLE"}), Object(b.jsx)("h3", {children: "IF DATA SET IS SAMPLE"}), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Variance"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.sampleVariance
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Standerd deviation"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: Math.sqrt(this.state.sampleVariance)
                                    }), Object(b.jsx)("br", {}), Object(b.jsx)("h3", {children: "IF DATA SET IS POPULATION"}), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Variance"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.populationVariance
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Standerd deviation"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: Math.sqrt(this.state.populationVariance)
                                    })]
                                })
                            })]
                        })
                    }
                }]), a
            }(s.Component)), x = function (t) {
                Object(h.a)(a, t);
                var e = Object(u.a)(a);

                function a(t) {
                    var s;
                    return Object(o.a)(this, a), (s = e.call(this, t)).handleChange = function (t) {
                        s.setState({dataSet: t.target.value, disabled1: !1})
                    }, s.setArray = function () {
                        var t = new Array;
                        t = s.state.dataSet.split(",");
                        var e = 0;
                        for (var a in t) t[a] = parseFloat(t[a]), e += t[a];
                        t.sort((function (t, e) {
                            return t - e
                        })), s.setState({dataList: t, dataList1: t, total: e})
                    }, s.calculateMeanTotalVarianceSD = Object(d.a)(l.a.mark((function t() {
                        var e, a, c, n, r, i, d, o, j;
                        return l.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, s.setArray();
                                case 2:
                                    for (r in e = s.state.dataList, a = s.state.total, 0, n = 0, e) n += (e[r] - a / e.length) * (e[r] - a / e.length);
                                    c = a / e.length, i = n / (e.length - 1), d = n / e.length, o = Math.sqrt(n / (e.length - 1)), j = Math.sqrt(n / e.length), s.setState({
                                        total: a,
                                        mean: c,
                                        populationVariance: d,
                                        sampleVariance: i,
                                        sampleSD: o,
                                        populationSD: j
                                    });
                                case 13:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), s.getDecimal = function (t) {
                        return t - Math.floor(t)
                    }, s.getWhole = function (t) {
                        return t - s.getDecimal(t)
                    }, s.quartile = Object(d.a)(l.a.mark((function t() {
                        var e, a, c, n, r, i, d, o, j, h, u, b, m;
                        return l.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, s.calculateMeanTotalVarianceSD();
                                case 2:
                                    e = (s.state.dataList.length + 1) / 4, a = (s.state.dataList.length + 1) / 2, c = 3 * (s.state.dataList.length + 1) / 4, n = s.getDecimal(e), r = s.getWhole(e), i = s.getDecimal(a), d = s.getWhole(a), o = s.getDecimal(c), j = s.getWhole(c), h = s.state.dataList[r - 1] + n * (s.state.dataList[r] - s.state.dataList[r - 1]), u = s.state.dataList[d - 1] + i * (s.state.dataList[d] - s.state.dataList[d - 1]), b = s.state.dataList[j - 1] + o * (s.state.dataList[j] - s.state.dataList[j - 1]), m = b - u > u - h ? "Positive skewed (right skewed distribution)" : b - u < u - h ? "Negative skewed (left skewed distribution)" : "Symmetric distribution", s.setState({
                                        Q1: h,
                                        Q2: u,
                                        Q3: b,
                                        upperBound: b + 1.5 * (b - h),
                                        lowerBound: h - 1.5 * (b - h),
                                        skewness: m
                                    });
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), s.getOutliers = Object(d.a)(l.a.mark((function t() {
                        var e, a;
                        return l.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, s.quartile();
                                case 2:
                                    for (e = "", a = 0; a < s.state.dataList.length; a++) s.state.lowerBound > s.state.dataList[a] && (e = e + s.state.dataList[a] + ", "), s.state.upperBound < s.state.dataList[a] && (e = e + s.state.dataList[a] + ", ");
                                    e = "" == e ? "No outliers" : (e = e.slice(0, -1)).slice(0, -1), s.setState({outliers: e});
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), s.maxMinRange = Object(d.a)(l.a.mark((function t() {
                        var e, a, c;
                        return l.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, s.getOutliers();
                                case 2:
                                    for (e = s.state.dataList[0], a = s.state.dataList[0], c = 0; c < s.state.dataList.length; c++) e > s.state.dataList[c] && (e = s.state.dataList[c]), a < s.state.dataList[c] && (a = s.state.dataList[c]);
                                    s.setState({max: a, min: e, range: a - e});
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), s.getList = Object(d.a)(l.a.mark((function t() {
                        var e, a;
                        return l.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, s.maxMinRange();
                                case 2:
                                    for (e = "", a = 0; a < s.state.dataList.length; a++) e = e + s.state.dataList[a] + ", ";
                                    e = (e = e.slice(0, -1)).slice(0, -1), s.setState({list: e});
                                case 7:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), s.submitHandler = function (t) {
                        t.preventDefault(), s.getList(), s.setState({disabled1: !0})
                    }, s.state = {
                        disabled1: !1,
                        dataSet: "",
                        dataList: [],
                        total: 0,
                        mean: 0,
                        populationSD: 0,
                        sampleSD: 0,
                        sampleVariance: 0,
                        populationVariance: 0,
                        Q1: 0,
                        Q2: 0,
                        Q3: 0,
                        upperBound: 0,
                        lowerBound: 0,
                        skewness: "0",
                        min: 0,
                        max: 0,
                        range: 0,
                        outliers: "0",
                        list: "0"
                    }, s
                }

                return Object(j.a)(a, [{
                    key: "render", value: function () {
                        return Object(b.jsxs)("div", {
                            className: "container",
                            children: [Object(b.jsxs)("p", {
                                children: [Object(b.jsx)("b", {children: "NOTE: "}), "All the calculations are done using the formulas we were taught in lectures. Good luck with your mid-exam! ", Object(b.jsx)("br", {}), Object(b.jsxs)("i", {
                                    children: ["work by - ", Object(b.jsx)("a", {
                                        href: "https://shehanx86.github.io/",
                                        children: "Shehan bossa"
                                    })]
                                })]
                            }), Object(b.jsx)("h4", {children: "For Data Lists"}), Object(b.jsx)("hr", {}), Object(b.jsx)("d1", {
                                className: "row", children: Object(b.jsxs)("form", {
                                    children: [Object(b.jsx)("p", {children: "Type your data set separated with commas. Dont put spaces "}), Object(b.jsxs)("p", {children: ["eg: ", Object(b.jsx)("i", {children: "12,25,14,2,4 "}), "or ", Object(b.jsx)("i", {children: "12.54,25,1.4,2,4.78"})]}), Object(b.jsx)("dd", {
                                        className: "col-sm-3",
                                        children: "Input data set:"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: Object(b.jsx)("input", {
                                            type: "text",
                                            id: "dataSet",
                                            onChange: this.handleChange
                                        })
                                    }), Object(b.jsx)("button", {
                                        className: "btn btn-success",
                                        disabled: this.state.disabled1,
                                        onClick: this.submitHandler,
                                        children: "Get Answers"
                                    }), Object(b.jsx)("br", {}), Object(b.jsx)("br", {}), Object(b.jsx)("dd", {
                                        className: "col-sm-3",
                                        children: "Your date set in ascending order"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.list
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Max"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.max
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Min"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.min
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Range"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.range
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Total"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.total
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Mean"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.mean
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Q1"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.Q1
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Q2 (Median)"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.Q2
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Q3"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.Q3
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "IQR (Q3 - Q1)"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.Q3 - this.state.Q1
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Upper bound"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.upperBound
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Lower bound"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.lowerBound
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Outliers"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.outliers
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Skeweness"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.skewness
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Variance (SAMPLE)"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.sampleVariance
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Standerd deviation (SAMPLE)"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: Math.sqrt(this.state.sampleVariance)
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Variance (POPULATION)"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: this.state.populationVariance
                                    }), Object(b.jsx)("dt", {
                                        className: "col-sm-3",
                                        children: "Standerd deviation (POPULATION)"
                                    }), Object(b.jsx)("dd", {
                                        className: "col-sm-9",
                                        children: Math.sqrt(this.state.populationVariance)
                                    })]
                                })
                            })]
                        })
                    }
                }]), a
            }(s.Component), O = function (t) {
                t && t instanceof Function && a.e(3).then(a.bind(null, 17)).then((function (e) {
                    var a = e.getCLS, s = e.getFID, c = e.getFCP, n = e.getLCP, r = e.getTTFB;
                    a(t), s(t), c(t), n(t), r(t)
                }))
            };
        r.a.render(Object(b.jsxs)(c.a.StrictMode, {children: [Object(b.jsx)(x, {}), Object(b.jsx)("br", {}), Object(b.jsx)(m, {})]}), document.getElementById("root")), O()
    }
}, [[16, 1, 2]]]);
//# sourceMappingURL=main.644badf9.chunk.js.map