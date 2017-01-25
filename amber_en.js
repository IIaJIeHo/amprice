<script>
/* Copyright (c) 2010-2016 Marcus Westin */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.store = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";module.exports=function(){function e(){try{return o in n&&n[o]}catch(e){return!1}}var t,r={},n="undefined"!=typeof window?window:global,i=n.document,o="localStorage",a="script";if(r.disabled=!1,r.version="1.3.20",r.set=function(e,t){},r.get=function(e,t){},r.has=function(e){return void 0!==r.get(e)},r.remove=function(e){},r.clear=function(){},r.transact=function(e,t,n){null==n&&(n=t,t=null),null==t&&(t={});var i=r.get(e,t);n(i),r.set(e,i)},r.getAll=function(){},r.forEach=function(){},r.serialize=function(e){return JSON.stringify(e)},r.deserialize=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},e())t=n[o],r.set=function(e,n){return void 0===n?r.remove(e):(t.setItem(e,r.serialize(n)),n)},r.get=function(e,n){var i=r.deserialize(t.getItem(e));return void 0===i?n:i},r.remove=function(e){t.removeItem(e)},r.clear=function(){t.clear()},r.getAll=function(){var e={};return r.forEach(function(t,r){e[t]=r}),e},r.forEach=function(e){for(var n=0;n<t.length;n++){var i=t.key(n);e(i,r.get(i))}};else if(i&&i.documentElement.addBehavior){var c,u;try{u=new ActiveXObject("htmlfile"),u.open(),u.write("<"+a+">document.w=window</"+a+'><iframe src="/favicon.ico"></iframe>'),u.close(),c=u.w.frames[0].document,t=c.createElement("div")}catch(l){t=i.createElement("div"),c=i.body}var f=function(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(t),c.appendChild(t),t.addBehavior("#default#userData"),t.load(o);var i=e.apply(r,n);return c.removeChild(t),i}},d=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),s=function(e){return e.replace(/^d/,"___$&").replace(d,"___")};r.set=f(function(e,t,n){return t=s(t),void 0===n?r.remove(t):(e.setAttribute(t,r.serialize(n)),e.save(o),n)}),r.get=f(function(e,t,n){t=s(t);var i=r.deserialize(e.getAttribute(t));return void 0===i?n:i}),r.remove=f(function(e,t){t=s(t),e.removeAttribute(t),e.save(o)}),r.clear=f(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(o);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(o)}),r.getAll=function(e){var t={};return r.forEach(function(e,r){t[e]=r}),t},r.forEach=f(function(e,t){for(var n,i=e.XMLDocument.documentElement.attributes,o=0;n=i[o];++o)t(n.name,r.deserialize(e.getAttribute(n.name)))})}try{var v="__storejs__";r.set(v,v),r.get(v)!=v&&(r.disabled=!0),r.remove(v)}catch(l){r.disabled=!0}return r.enabled=!r.disabled,r}();
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});



var unicode = {
  escape: function(s) {
    return s.replace(/^[-~]|\\/g, function(m) {
      var code = m.charCodeAt(0);
      return '\\u' + ((code < 0x10) ? '000' : ((code < 0x100) ? '00' : ((code < 0x1000) ? '0' : ''))) + code.toString(16);
    });
  },
  unescape : function (s) {
    return s.replace(/\\u([a-fA-F0-9]{4})/g, function(matched, g1) {
      return String.fromCharCode(parseInt(g1, 16))
    })
  }
}
var app = angular.module('plunker', ['nvd3','ngTable']);
app.controller('MainCtrl', ["$scope","$http","NgTableParams",function($scope,$http,NgTableParams) {
  var convert = { 
    raw : 'Rough',
    ball: 'Beads',
    index: 'Indexes',
    domenic:'Dominican',
    dominic:'Dominican',
    baltic:'Baltic',
    ukranian:'Ukrainian',
    mexican:'Mexican (Chiapas)',
    indonezian:'Indonesian (Sumatra)',
    'Матовый/Компактный':'Opaque/Beadable',
    'Прозрачный/Компактный':'Transparent/Beadable',
    'Прозрачный/Плоский':'Transparent/Flat',
    'Матовый/Плоский':'Opaque/Flat',
    'МИКС':'MIX',
    'ААА':'ААА',
    'АА':'АА',
    'А':'А',
    'В':'В',
    'С':'С',
    'Голубой':'Blue',
    'Зеленый':'Green',
    'Желтый':'Yellow',
    'Матовый/ААА':'Opaque/ААА',
    'Матовый/АА':"Opaque/АА",
    'Матовый/А':"Opaque/А",
    'Матовый/В':"Opaque/В",
    'Матовый/С':"Opaque/С",
    'Прозрачный/ААА':'Transparent/ААА',
    'Прозрачный/АА':"Transparent/АА",
    'Прозрачный/А':"Transparent/А",
    'Прозрачный/В':"Transparent/В",
    'Прозрачный/С':"Transparent/С",
    'Сырец': 'Rough',
    'Шар':'Ball'

};
  function call_data(){
    init_default_data();
    set_default_state_for_amber_type();
    call_version();
    if (window.localStorage){
        var tabledata = store.get('tabledata');
        $scope.version = store.get('version');
    } 
    if (tabledata){
        $scope.get_from_localStorage = true;
        make_things_done(tabledata);
        first_call(tabledata.length,start_calling);
    } else {
        start_calling();
    }
    call_ajax_to_every(15);
  }

  function call_version() {
    $http.get('http://amberprice.net/wp-json/posts?type[]=tableme&filter[category_name]=version')
        .then(function(data){
            try{
                if ($scope.get_from_localStorage){
                    var ver = data.data[0].content.slice(3,-5)
                    .replace(/&#171;/g, '"')
                    .replace(/&#187;/g, '"')
                    .replace(/&#8212;/g, '-')
                    .replace(/&#8243;/g, '"');
                    ver = unicode.unescape(ver);
                    ver = JSON.parse(ver);
                    ver = ver[0][0];
                    if ($scope.version != ver){
                        if (window.localStorage){
                        store.set('version',ver);
                        start_calling();
                        }
                        
                    }
                } 
            } catch(e){

            }

        });
  }

  function splice_array(main,second){
    if (main){
        var titles = main.map(function(obj){
            return obj.title;
        });
        second.forEach(function(obj){
            if (titles.indexOf(obj.title) != -1){
                var removed = main.splice(titles.indexOf(obj.title), 1, obj);
            } else {
                main.push(obj);
            }
            
        });
        return main;
    } else {
        return second;
    }

  }
  function make_things_done(main){
            $scope.bundle = main;
            $scope.main = $scope.bundle.filter(function(data){
                return ((data.amber_type == $scope.state.amber_type)&&(data.amber_class == $scope.state.amber_class));
            }).sort(function(data1,data2){
                return data1.time - data2.time;
            });
            $scope.store_indexes = $scope.bundle.filter(function(data){
                return data.amber_type == 'Indexes';
            }).sort(function(data1,data2){
                return data1.time - data2.time;
            });
            var index_data = filter_index_country(angular.copy($scope.store_indexes));
            if (index_data.length >0) {
                index_data[index_data.length - 1].data = index_data[index_data.length - 1].data.map(function(ind){
                                return Object.assign({},ind,{value:ind.value,diff:add_plus_for_positive(ind.diff),diff_absolute:add_plus_for_positive(ind.diff_absolute)});
                            });
                            $scope.amberindex = index_data[index_data.length - 1].data.filter(function(val){
                    return val.sub_type == 'Amber Index (AI)';
                })[0];
                $scope.indexes = new NgTableParams({count:100},{dataset: index_data[index_data.length - 1].data});
                $scope.select_indexes = index_data[index_data.length - 1].data;
                if ($scope.select_indexes.length > 0){
                    var index_type = {};
                    var sub_type = [];
                    $scope.select_indexes.forEach(function (ind) {
                        index_type[ind.index_type] = 1;
                    });
                    index_type = Object.keys(index_type);
                    index_type.forEach(function(ind_type){
                        sub_type[ind_type] = [];
                        $scope.select_indexes.forEach(function (ind) {
                            if (ind.index_type == ind_type){
                                sub_type[ind_type].push(ind.sub_type);
                            }
                        });
                    });
                    $scope.index_types = index_type;
                    $scope.sub_types = sub_type;
                }


            }

            

            $scope.pricelist = $scope.bundle.filter(function(data){
                return data.type == 'pricelist';
            });
            var tempdescription= $scope.bundle.filter(function (data) {
                return data.type == 'descriptionindex';
            });

            if (tempdescription&&tempdescription[0]){
                $scope.descriptionindex = tempdescription[0].data;
            }
            make_up_deals($scope.bundle.filter(function(data){
                return data.type == 'deals';
            }));

            count_current();
            
            
            $scope.currency = $scope.bundle.filter(function(data){
                return data.type == 'currency';
            });
            if ($scope.multilines){
                $scope.options.chart.width = 800;
                $scope.options.chart.height = 500;
                $scope.options.chart.legendPosition = 'bottom';
                $scope.options.chart.legend =  {padding: 320,width:400,expanded:true,maxKeyLength:100,margin:{top:15}};
            }
            if ($scope.currency.length > 0) {
                $scope.currency = $scope.currency[0].data.filter(function(data){
                   return !!data.date; 
                }).map(function(data){
                    return Object.assign({},data,{date:+(new Date(data.date.split('.').join('/')))});
                }).sort(function(data1,data2){
                    return data1.date - data2.date;
                }); 
            }
            make_date_bundle();
            render_table_raw();
            render_table_ball();

            $scope.link_to_pricelist = provide_pricelist();
            var display = $scope.display();
            if (display&&display.values&&display.values[0]&&display.values[0].y != 0){
                $scope.data = [$scope.display()];
            }
            if ($scope.api){
                $scope.api.refresh();
            }
            
            $scope.showapp = true;
  }

  function round_to_two(str) {
      return Math.round(parseFloat(str)*100)/100;
  }

  function postupdate(data){
        return data.data.map(function(plans){
                var my_array = plans.content.slice(3,-5)
                .replace(/&#171;/g, '"')
                .replace(/&#187;/g, '"')
                .replace(/&#8212;/g, '-')
                .replace(/&#8243;/g, '"');
                my_array = unicode.unescape(my_array);
                my_array = JSON.parse(my_array);
                meta_data = plans.title.split('/');
                
                if (meta_data[0] == 'amber') {
                    if (meta_data[2] == 'raw'){
                        if (meta_data[3] == 'indonezian'){
                            my_array = my_array.map(function(arr){
                                var random = getRandomInt(100,1000);
                                return {
                                    frakcii: repa(arr[0]),
                                    sort: convert[arr[1]],
                                    country: arr[2],
                                    value: round_to_two(arr[3])
                                }
                            });
                        } else if (meta_data[3] == 'domenic'){
                            my_array = my_array.map(function(arr){
                                var random = getRandomInt(100,1000);
                                return {
                                    frakcii: repa(arr[0]),
                                    sort: convert[arr[2]],
                                    form: convert[arr[1]],
                                    country: arr[3],
                                    value: round_to_two(arr[4])
                                }
                            });
                        } else {
                            my_array = my_array.map(function(arr){
                                var random = getRandomInt(100,1000);
                                return {
                                    frakcii: repa(arr[0]),
                                    form: convert[arr[2]],
                                    sort: convert[arr[1]],
                                    country: arr[3],
                                    value: round_to_two(arr[4])
                                }
                            });
                        }

                    } else if (meta_data[2] == 'ball'){
                        if (meta_data[3] == 'domenic'){
                            my_array = my_array.map(function(arr){
                                var random = getRandomInt(100,1000);
                                return {
                                    frakcii: arr[0],
                                    form: arr[1],
                                    sort: convert[arr[2]],
                                    country: arr[3],
                                    value: round_to_two(arr[4])
                                }
                            });
                        } else {
                            my_array = my_array.map(function(arr){
                                var random = getRandomInt(100,1000);
                                return {
                                    frakcii: repa(arr[0]),
                                    form: convert[arr[1]],
                                    country: arr[2],
                                    value: round_to_two(arr[3])
                                }
                            });
                        }                    
                        
                    } else if (meta_data[2] == 'index'){
                        my_array = my_array.map(function(arr){
                            var random = getRandomInt(100,1000);
                            var rand_diff = getRandomInt(-100,100);
                            var type;
                            if (arr[0] == "-"){
                                type = "General";
                            } else{
                                type = convert[arr[0]];
                            }
                            return {
                                index_type: type,
                                sub_type: arr[1],
                                country: arr[2],
                                value: round_to_two(arr[3])
                            }
                        });
                        
                    }
                    return {
                      title: plans.title,
                      type: meta_data[0],
                      time: +(new Date(meta_data[1].split('.').join('/'))),
                      data: my_array,
                      amber_type: convert[meta_data[2]],
                      amber_class: convert[meta_data[3]]
                    };  

                } else if (meta_data[0] == 'currency'){
                    labels = my_array[0]
                    my_array = my_array.slice(1).map(function(arr){
                        var temp = new Object();
                        for(var i=0;i<arr.length;i++){
                            temp[labels[i]] = arr[i];
                        }
                        return temp;
                    });
                    return {
                        title: plans.title,
                        type: meta_data[0],
                        data: my_array
                    }
                } else if (meta_data[0] == 'deals'){
                    my_array = my_array.map(function(arr){
                        return {
                            datetime: +(new Date(arr[0].split('.').join('/') + " "+ arr[1])),
                            description: arr[2],
                            weight: arr[3],
                            old_value: arr[4],
                            value: arr[5],
                            diff: arr[6],
                            title: plans.title,
                        }
                    });
                    return {
                        type: meta_data[0],
                        data: my_array
                    }
                } else if (meta_data[0] == 'pricelist'){
                    my_array = my_array.map(function(arr){
                        var newdate = arr[0].slice(3,5)+'/'+arr[0].slice(0,2)+'/'+arr[0].slice(6);
                        return {
                            datetime: +(new Date(Date.parse(newdate))),
                            link: arr[1],
                        }
                    });
                    return {
                        type: meta_data[0],
                        data: my_array,
                        title: plans.title
                    }
                } else if (meta_data[0] == 'descriptionindex') {
                    var nicearr = {};
                    my_array.forEach(function(arr){
                        nicearr[arr[0]]=arr[1];
                    });
                    return {
                        type: meta_data[0],
                        data: nicearr,
                        title: plans.title
                    }
                }
                return {};
        });
  }

  function first_call(length,callback){
    $http.get('http://amberprice.net/wp-json/posts?filter[posts_per_page]=1&type[]=tableme&page='+(length+1))
        .then(function(data){
            if (data.data.length > 0) {
                callback();
            }
        });
  }

  function call_ajax_to_data() {
    $http.get('http://amberprice.net/wp-json/posts?filter[posts_per_page]=100&type[]=tableme')
        .then(function(data){

            var main = postupdate(data);

            if (window.localStorage){
            store.remove('tabledata');
            store.set('tabledata',main);
        }
            make_things_done(main);
        });
  }

  function repa(val){
    return val.replace(/г/g, 'g').replace(/мм/g, 'mm');
  }

  function start_calling() {
    call_ajax_to_first(15);
    var posts_per_page = 5;
    var page = 1;
    for(var i = page;i<8;i++){
        call_ajax_to_add_data(posts_per_page,i);
    }
  }

  var tempmain = [];
  var counter_main = 0;
  var counter_bundle = 0;
  function call_ajax_to_first(posts_per_page) {
    $http.get('http://amberprice.net/wp-json/posts?filter[posts_per_page]='+posts_per_page+'&type[]=tableme&filter[category_name]=first')
        .then(function(data){
  
            if (data.data.length != 0) {
                var main = postupdate(data);
                if (counter_main < 7){
                    $scope.bundle = splice_array($scope.bundle,main);
                    make_things_done($scope.bundle);
                }
            } else {

            }
        });
  }
  function call_ajax_to_every(posts_per_page) {
    $http.get('http://amberprice.net/wp-json/posts?filter[posts_per_page]='+posts_per_page+'&type[]=tableme&filter[category_name]=every')
        .then(function(data){

            if (data.data.length != 0) {
                var main = postupdate(data);
                if (counter_main < 7){
                    debugger;
                    $scope.bundle = splice_array($scope.bundle,main);
                    make_things_done($scope.bundle);
                }
            } else {

            }
        });
  }

  function call_ajax_to_add_data(posts_per_page,page) {
    $http.get('http://amberprice.net/wp-json/posts?filter[posts_per_page]='+posts_per_page+'&type[]=tableme&page='+page)
        .then(function(data){
 
            if (data.data.length != 0) {
                var main = postupdate(data);
                tempmain = tempmain.concat(main);
   
                $scope.bundle = splice_array($scope.bundle,main);
                counter_bundle++;
                if ((counter_bundle%5) == 0){
                    make_things_done($scope.bundle);
                } 
                
                call_ajax_to_add_data(posts_per_page,page+7);
            } else {
                counter_main++;
                
                if (counter_main == 7){
                    
                    make_things_done(tempmain);
                    if (window.localStorage){
                    store.remove('tabledata');
                    store.set('tabledata',tempmain);
                }
                }
            }
        });
  }

 

        $http.get('http://amberprice.net/wp-json/posts?type[]=events&&filter[posts_per_page]=1000')
        .then(function(data){
            
            var main = data.data.map(function(event){
                var terms = event.terms,
                    obj = {};
                obj.link = decodeURIComponent(event.link);
                obj.title = decodeURIComponent(event.title);
                if (event.excerpt){
                    obj.excerpt = decodeURIComponent(event.excerpt.slice(3,100)+"...");
                    obj.excerpt = obj.excerpt.replace(/<\/p>/g, '"');
                }
                
                
                if (event.featured_image) {
                    obj.image = decodeURIComponent(event.featured_image.source);
                }
                for (key in terms){
                    obj[key] = decodeURIComponent(terms[key][0].name);
                }
                return obj;
                
            });
            
                main = main.map(function (event) {
                    if (event.start_time && event.end_date){
                    var newdate = event.start_time.slice(3,5)+'/'+event.start_time.slice(0,2)+'/'+event.start_time.slice(6);
                    var newenddate = event.end_date.slice(3,5)+'/'+event.end_date.slice(0,2)+'/'+event.end_date.slice(6);
                    return Object.assign({},event,{'start_date': +(new Date(Date.parse(newdate))),'end_date':+(new Date(Date.parse(newenddate)))});
                    }
                });


            
            var current_month = (new Date()).getMonth();
            var months = ['January','Febrary','March','April','May','June','July','August','September','October','November','December'];
            $scope.new_monthes = [];
            while ($scope.new_monthes.length != 12){
                $scope.new_monthes.push(months[current_month]);
                current_month++;
                if (current_month == 12){
                    current_month = 0;
                }
            }
            window.init_slider();
            $scope.current_event_month = (new Date()).getMonth();
            $scope.event_state =[];
            $scope.example_events = [];
            main.forEach(function (event) {
                if (event&&event.start_date){
                    var start_date_month= new Date(event.start_date).getMonth();
                } else {
                    var start_date_month = -1;
                }
                
                if (!$scope.event_state[start_date_month]) $scope.event_state[start_date_month] = [];
                $scope.event_state[start_date_month].push(event);
            });
            $scope.example_events = main.filter(function (arr) {
                return arr&&arr.master&&arr.master.length > 0;
            })
            $scope.event_container = {};
            main.forEach(function (event) {

                if (event){
                    Object.keys(event).forEach(function (key) {
                        if (!$scope.event_container[key]){
                            $scope.event_container[key] = [];
                        }
                        $scope.event_container[key].push({id:event[key],title:event[key]});
                    });
                }


            });
            main = main.filter(function(event){
                return (event&&event.title&&(event.title.length > 0));
            });

            // Object.keys($scope.event_container).forEach(function (keys) {
            //     var temp = $scope.event_container[keys].filter(function (elem,index,self) {
            //         return index == self.indexOf(elem);
            //     });
            //     temp = temp.map(function (t) {
            //         return {id:t,title:t};
            //     })
            //     $scope.event_container[key] = temp;
            // });

            $scope.event_container["start_date"] = $scope.event_container["start_date"].map(function (date) {
                return {id:date.id,title:$scope.format_date(date.title)};
            });
            $scope.event_container["end_date"] = $scope.event_container["end_date"].map(function (date) {
                return {id:date.id,title:$scope.format_date(date.title)};
            });

            // console.log('$scope.container1');
            // console.log($scope.event_container);
            // $scope.event_container = $scope.event_container.map(function (events) {
            //     return events.map(function (event) {
            //         return {id:event,title:event};
            //     })
            // });
            // console.log('$scope.container2');
            // console.log($scope.event_container);
            // console.log(main);
            $scope.events = new NgTableParams({count:100},{dataset: main});
            $scope.showevent = true;
            });

        

        $scope.change_current_event_month = function(increase) {
            if (increase){
                $scope.current_event_month+=1;
            } else{
                $scope.current_event_month-=1;
            }
        }
         call_data();

        
        $scope.$watch('state',function(new_one,old_one){

            if (!$scope.multidata){
                $scope.options.noData = "No data";
            }
            $scope.criteria = criteria_func();
            if ((new_one.amber_type != old_one.amber_type)||(new_one.amber_class != old_one.amber_class)){
                $scope.main = $scope.bundle.filter(function(data){
                    return ((data.amber_type == $scope.state.amber_type)&&(data.amber_class == $scope.state.amber_class));
                }).sort(function(data1,data2){
                    return data1.time - data2.time;
                });
                set_default_state_for_amber_type(new_one.amber_type);
                if ((new_one.amber_class == 'Indonesian (Sumatra)')&&(new_one.amber_type == 'Rough')){
                    $scope.state.frakcii = '<50g.';
                }
                if ((new_one.amber_class == 'Dominican')&&(new_one.amber_type == 'Rough')){
                    $scope.state.frakcii = '>100g.';
                }
                if ((new_one.amber_class != old_one.amber_class)&&(new_one.amber_class == "Dominican")){
                    if (!$scope.multilines) $scope.table_state = 'Rough (blue)';
                    $scope.state.sort = 'Blue';
                    $scope.state.form = 'ААА';
                    if (new_one.amber_type == 'Rough'){
                        $scope.state.frakcii = ">100g.";
                        $scope.state.sort = 'Blue';
                    $scope.state.form = 'ААА';
                    } else if (new_one.amber_type == 'Beads'){
                        $scope.state.frakcii = "20+/5+";
                        $scope.state.sort = 'Blue';
                    $scope.state.form = 'ААА';
                    }
                }
                if ((new_one.amber_class == 'Dominican')&&(new_one.amber_type == 'Beads')){
                    $scope.state.frakcii = '20+/5+';
                }
                if (new_one.amber_type != old_one.amber_type){
                    var index_data = filter_index_country(angular.copy($scope.store_indexes));
    
                    if ($scope.currency){
                        index_data = index_data.map(function(index){
                            var cur = $scope.currency[$scope.currency.length - 1][$scope.state.currency];
      
                            index.data = index.data.map(function(ind){
                                return Object.assign({},ind,{value:Math.round(ind.value*cur*100)/100,diff:add_plus_for_positive(Math.round(ind.diff*100)/100),diff_absolute:add_plus_for_positive(Math.round(ind.diff_absolute*cur*100)/100)});
                            })
                            return index;
                        });

                        $scope.amberindex = index_data[index_data.length - 1].data.filter(function(val){
                            return val.sub_type == 'Amber Index (AI)';
                        })[0];
                        if (($scope.multidata.length > 0) && (new_one.currency != old_one.currency)){
                            var temp_multidata = angular.copy($scope.multidata_base);
                            temp_multidata = temp_multidata.map(function(chart){
                                var chart_value = chart.values;
                                chart_value = chart_value.map(function(point){
                                    point.y = point.y*$scope.currency[$scope.currency.length - 1][$scope.state.currency];
                                    return point;
                                });
                                chart.values = chart_value;
                                return chart;
                            });
                            $scope.multidata = temp_multidata;
                            yDomainRe();
                            $scope.api.refresh();
                        }
                    }

                    $scope.indexes = new NgTableParams({count:100},{dataset: index_data[index_data.length - 1].data});
                    $scope.indexes.reload();
                }

                if((new_one.amber_class != old_one.amber_class)&&($scope.multilines)){
                var index_data = filter_index_country(angular.copy($scope.store_indexes));

                    index_data = index_data.map(function(index){
                        var cur = $scope.currency[$scope.currency.length - 1][$scope.state.currency];

                        index.data = index.data.map(function(ind){
                            return Object.assign({},ind,{value:Math.round(ind.value*cur*100)/100,diff:add_plus_for_positive(Math.round(ind.diff*100)/100),diff_absolute:add_plus_for_positive(Math.round(ind.diff_absolute*cur*100)/100)});
                        })
                        return index;
                    });
                    $scope.select_indexes = index_data[index_data.length - 1].data;
                    if ($scope.select_indexes.length > 0){
                        var index_type = {};
                        var sub_type = [];
                        $scope.select_indexes.forEach(function (ind) {
                            index_type[ind.index_type] = 1;
                        });
                        index_type = Object.keys(index_type);
                        index_type.forEach(function(ind_type){
                            sub_type[ind_type] = [];
                            $scope.select_indexes.forEach(function (ind) {
                                if (ind.index_type == ind_type){
                                    sub_type[ind_type].push(ind.sub_type);
                                }
                            });
                        });
                        $scope.index_types = index_type;
                        $scope.sub_types = sub_type;
                        $scope.state.sub_type = $scope.sub_types[$scope.state.index_type][1];
                    }
                }
            }
            if (new_one.index_type != old_one.index_type) {

                var index_data = filter_index_country(angular.copy($scope.store_indexes));

                    index_data = index_data.map(function(index){
                        var cur = $scope.currency[$scope.currency.length - 1][$scope.state.currency];
 
                        index.data = index.data.map(function(ind){
                            return Object.assign({},ind,{value:Math.round(ind.value*cur*100)/100,diff:add_plus_for_positive(Math.round(ind.diff*100)/100),diff_absolute:add_plus_for_positive(Math.round(ind.diff_absolute*cur*100)/100)});
                        })
                        return index;
                    });
                    $scope.select_indexes = index_data[index_data.length - 1].data;
                    if ($scope.select_indexes.length > 0){
                        var index_type = {};
                        var sub_type = [];
                        $scope.select_indexes.forEach(function (ind) {
                            index_type[ind.index_type] = 1;
                        });
                        index_type = Object.keys(index_type);
                        index_type.forEach(function(ind_type){
                            sub_type[ind_type] = [];
                            $scope.select_indexes.forEach(function (ind) {
                                if (ind.index_type == ind_type){
                                    sub_type[ind_type].push(ind.sub_type);
                                }
                            });
                        });
                        $scope.index_types = index_type;
                        $scope.sub_types = sub_type;
                        $scope.state.sub_type = $scope.sub_types[$scope.state.index_type][1];
                    }
                $scope.state.sub_type = $scope.sub_types[new_one.index_type][0];
            }

            if (new_one.amber_class != old_one.amber_class){
                if (new_one.amber_class == "Indonesian (Sumatra)"){
                    $scope.table_state = 'Rough';
                } else if (new_one.amber_class == "Mexican (Chiapas)"){
                    $scope.table_state = 'Beads';
                } else if (new_one.amber_class == "Dominican"){
                    if (!$scope.multilines) $scope.table_state = 'Rough (blue)';
                    $scope.state.sort = 'Blue';
                    $scope.state.form = 'ААА';
                    if (new_one.amber_type == 'Rough'){
                        $scope.state.frakcii = ">100g.";
                        $scope.state.sort = 'Blue';
                    $scope.state.form = 'ААА';
                    } else if (new_one.amber_type == 'Beads'){
                        $scope.state.frakcii = "20+/5+";
                        $scope.state.sort = 'Blue';
                    $scope.state.form = 'ААА';
                    }
                } else {
                    $scope.table_state = 'Rough (medium fractions)';
                }
                if (new_one.amber_type == 'Rough'){
                    render_table_raw();
                } else if (new_one.amber_type == 'Beads'){
                    render_table_ball();
                }
            }
            if ((new_one.country != old_one.country)||(new_one.currency != old_one.currency)){
                if (new_one.amber_type == 'Rough'){
                    render_table_raw();
                } else if (new_one.amber_type == 'Beads'){
                    render_table_ball();
                }
                store.set('currency',new_one.currency);

                var index_data = filter_index_country(angular.copy($scope.store_indexes));

                if ($scope.currency){
                    index_data = index_data.map(function(index){
                        var cur = $scope.currency[$scope.currency.length - 1][$scope.state.currency];
               
                        index.data = index.data.map(function(ind){
                            return Object.assign({},ind,{value:Math.round(ind.value*cur*100)/100,diff:add_plus_for_positive(Math.round(ind.diff*100)/100),diff_absolute:add_plus_for_positive(Math.round(ind.diff_absolute*cur*100)/100)});
                        })
                        return index;
                    });

                    $scope.amberindex = index_data[index_data.length - 1].data.filter(function(val){
                        return val.sub_type == 'Amber Index (AI)';
                    })[0];
                    if (($scope.multidata.length > 0) && (new_one.currency != old_one.currency)){
                        //rebuild_multibundle($scope.graph.graph_time,$scope.graph.graph_type);
                        // var temp_multidata = angular.copy($scope.multidata_base);
                        // temp_multidata = temp_multidata.map(function(chart){
                        //     var chart_value = chart.values;
                        //     chart_value = chart_value.map(function(point){
                        //         point.y = point.y*$scope.currency[$scope.currency.length - 1][$scope.state.currency];
                        //         return point;
                        //     });
                        //     chart.values = chart_value;
                        //     return chart;
                        // });
                        // $scope.multidata = temp_multidata;
                        // yDomainRe();
                        // $scope.api.refresh();
                    }
                }

                $scope.indexes = new NgTableParams({count:100},{dataset: index_data[index_data.length - 1].data});
                $scope.indexes.reload();
            }
            if ($scope.state.amber_class != 'Dominican'){
               
                $scope.indostate.form = new_one.form.split('/')[1];
                if (['100g.','200g.','300g.','500g.','1000g.'].some(function (k) {
                    return new_one.frakcii == k;
                })) {
                    $scope.indostate.frakcii = ">"+new_one.frakcii;
                } else {
                    $scope.indostate.frakcii = new_one.frakcii;
                }
            }

            
            if (($scope.main)&&($scope.multidata.length == 0)){
                var display = $scope.display();
                if (display&&display.values&&display.values[0]&&display.values[0].y != 0){
                    $scope.data = [$scope.display()];
                    if ($scope.api){
                        $scope.api.refresh();
                    }
                }
                //$scope.data = [$scope.display()];
            }
            if ((new_one.date)&&(old_one.date)&&(new_one.date.value != old_one.date.value)){
                var index_data = filter_index_country(angular.copy($scope.store_indexes));
                var myindex = index_data.filter(function (ind) {
                    return $scope.state.date.value == ind.time.toString();
                });
                        if ($scope.currency.length > 0){
                            var cur = $scope.currency[$scope.currency.length - 1][$scope.state.currency];
                        } else {
                            var cur = 1;
                        }
                        
                        
                if (myindex.length > 0) {
                    myindex= myindex[0].data.map(function(ind){
                                    return Object.assign({},ind,{value:ind.value*cur,diff:add_plus_for_positive(ind.diff),diff_absolute:add_plus_for_positive(ind.diff_absolute*cur)});
                           });
                    $scope.amberindex = myindex.filter(function(val){
                        return val.sub_type == 'Amber Index (AI)';
                    })[0];
                } else {
                    myindex = null;
                }

                $scope.indexes = new NgTableParams({count:100},{dataset: myindex});
                $scope.indexes.reload();
            }
            

            if ($scope.data_bundle){
                try {
                    $scope.price_table = $scope.data_bundle[$scope.state.date.value][$scope.state.amber_class];
                    //$scope.init_date = 'Rough';
                    render_table_raw();
                    //$scope.init_date = 'Beads';
                    render_table_ball();
                    $scope.init_date = false;
                } 
                catch (e){
                    
                }

            }
            

        },true);

        $scope.$watch('showapp',function (new_value) {
            var userAgent = window.navigator.userAgent;

            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
                $scope.state.amber_class = 'Indonesian (Sumatra)';
                setTimeout(function (ar) {
                    $scope.state.amber_class = 'Baltic';
                },50);
            }

        })

        $scope.$watch('table_state',function(new_value){
            if ($scope.state&&!$scope.multilines){
                if ((new_value.indexOf('rough') != -1)||(new_value.indexOf('Rough') != -1)){
                    $scope.state.amber_type = "Rough";
                } else if ((new_value.indexOf('Beads') != -1)||(new_value.indexOf('beads') != -1)) {
                    $scope.state.amber_type = "Beads";
                } else {
                    $scope.state.amber_type = "Indexes";
                }
                
                if ((new_value.indexOf('blue') != -1)||(new_value.indexOf('Blue') != -1)){
                    $scope.state.sort = 'Blue';
                } else if ((new_value.indexOf('green') != -1)||(new_value.indexOf('Green') != -1)){
                    $scope.state.sort = 'Green';
                } else if ((new_value.indexOf('yellow') != -1)||(new_value.indexOf('Yellow') != -1)){
                    $scope.state.sort = 'Yellow';
                } 
            }

        },true);

        

        $scope.$watch('graph',function(new_value){
            rebuild_multibundle(new_value.graph_time,new_value.graph_type);
        },true);

        $scope.$watch('indostate',function(new_value){
            if ($scope.state.amber_class == 'Indonesian (Sumatra)') {
                $scope.state.form = 'Opaque/'+new_value.form;
            }
            if (new_value.frakcii[0] == '>'){
                $scope.state.frakcii = new_value.frakcii.slice(1);
            } else {
                $scope.state.frakcii = new_value.frakcii;
            }
        },true);
        
        $scope.$watch('data', function(new_data){
            var arr = new_data[0].values,
                length = arr.length,
                last,
                prev,
                obj = {};
            if (length > 1){
                last = arr[arr.length - 1].y,
                prev = arr[arr.length - 2].y;
                obj.value = last - prev;
                obj.persent = ((last - prev)/prev*100).toFixed(2)+"%";
                obj.positive = obj.value > 0;
                obj.actual = last;
            } else {
                obj.value = 0;
                obj.persent = 0;
                obj.positive = false;
                obj.actual = 0;
            }
            $scope.index = obj;
            
        },true);


        function provide_pricelist(){
            if ($scope.state.date){
                var date = $scope.state.date.value;
                if ($scope.pricelist[0]){
                    var pricelist = $scope.pricelist[0].data.filter(function (price) {
                        return price.datetime == date;
                    })[0];
                    if (!pricelist) pricelist = $scope.pricelist[0].data;
                    return pricelist.link; 
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    



        function make_date_bundle(){
            $scope.data_bundle = {};
            $scope.bundle.forEach(function(table){
                if (table.time&&table.amber_class&&table.amber_type){
                    if (!$scope.data_bundle[table.time]){
                        $scope.data_bundle[table.time] = {};
                    }
                    
                    if (!$scope.data_bundle[table.time][table.amber_class]){
                        $scope.data_bundle[table.time][table.amber_class] = {};
                    }
                    $scope.data_bundle[table.time][table.amber_class][table.amber_type] = table.data;
                }
            });

            if ($scope.data_bundle){
                $scope.select_options.date = Object.keys($scope.data_bundle);
                $scope.select_options.date = $scope.select_options.date.map(function(date){
                    return {
                        name: $scope.format_date(date),
                        value: date
                    }
                }).sort(function (date1,date2) {
                    return date1.value - date2.value;
                })
                $scope.state.date = $scope.select_options.date[$scope.select_options.date.length -1];
            }
    
            //fill the gaps
            
        }

        function get_current_bundle(date,am_class,am_type){
            var list_of_dates = Object.keys($scope.data_bundle).sort(function (date1,date2) {
                    return parseInt(date1) - parseInt(date2);
                });
            if($scope.data_bundle){
                var curr_index = list_of_dates.indexOf(date);
                var target;
                for (var i = curr_index;i >= 0;i--){
                    if ($scope.data_bundle[list_of_dates[i]]){
                        if ($scope.data_bundle[list_of_dates[i]][am_class]){
                            target = $scope.data_bundle[list_of_dates[i]][am_class][am_type];
                        }
                    }
                    if (target){
                        return target;
                    }
                }
            }
            return null;
        }



        function make_event_current_list(event_list){
            
        }




        function add_plus_for_positive(num){

            if (typeof num == "number"){
                return num > 0 ? "+"+num.toFixed(2) : num.toFixed(2);
            }
            else {
                if (num[0] == "-"){
                    return num;
                } else{
                    return "+"+num;
                }
            }
        }

        $scope.makemoresymbol = function(s){
            return concato('>',s);
        }

        function concato() {
            return [].slice.call(arguments,0).reduce(function (s,i) {
                return s+i;
            });
        }
        
        function filter_index_country(ind){
            
            ind = ind.filter(function (indo) {
                return $scope.state.amber_class == indo.amber_class;
            })
            return ind.map(function(index,i){
                
                index.data = index.data.filter(function(data){
                    return (data.country == $scope.state.country);
                }).map(function(data,j){
                    if (ind[i - 1]){
                        
                        try{
                            data.diff_absolute = Math.round((data.value - ind[i - 1].data[j].value) * 100)/100;
                        } catch(e) {
                            data.diff_absolute = 0;
                        }
                        
                    } else {
                        data.diff_absolute = 0;
                    }
                    
                    data.positive = (data.diff_absolute > 0);
                    data.diff = Math.round((data.diff_absolute/(data.value-data.diff_absolute) *100)*100)/100;
                    return data;
                });

                return index;
            })
        }

        function filter_index_country_small (ind) {
            return index.filter(function(data){
                    return data.country == $scope.state.country;
                }).map(function(data,j){
                    if (ind[i - 1]){
                        data.diff_absolute = data.value - ind[i - 1].data[j].value;
                    } else {
                        data.diff_absolute = 0;
                    }
                    
                    data.positive = (data.diff_absolute > 0);
                    data.diff = (data.diff_absolute/(data.value-data.diff_absolute) *100).toFixed(2);
                    return data;
                });
        }
        function set_default_state_for_amber_type(amber_type){
            if (amber_type == 'Rough'){
                $scope.state.frakcii = "20-50g.";
                $scope.state.sort = "ААА";
                $scope.state.form = "Opaque/Beadable";
                $scope.state.country = "Европа";
            } else if (amber_type == 'Beads'){
                $scope.state.frakcii = "12mm+/1g+";
                if ($scope.state.amber_class != 'Dominican'){
                    $scope.state.form = "Opaque/ААА";
                }
                
                $scope.state.country = "Европа";
            } else if (amber_type == 'Indexes'){
                $scope.state.index_type = "General";
            }
        }
        var height_of_chart = 550;
        $scope.clear_them_all = function () {
            $scope.multidata = [];
            $scope.multidata_base = [];
        }


        function rebuild_multibundle(time,type) {
            var now = (new Date()).getTime();
            var localtime;
            if (time == "3 months"){
                localtime = now - 1000*60*60*24*30*3; 
            } else if (time == "6 months"){
                localtime = now - 1000*60*60*24*30*6;
            } else if (time == "1 year"){
                localtime = now - 1000*60*60*24*30*12;
            } else {
                localtime = 0;
            }


                            
            if (type == 'Absolute values'){
                            var temp_multidata = angular.copy($scope.multidata_base);
                            temp_multidata = temp_multidata.map(function(chart){
                                var chart_value = chart.values;
                                chart_value = chart_value.filter(function(point){
                                    return localtime < point.x;
                                });
                                chart_value = chart_value.map(function(point){
                                    point.y = point.y*$scope.currency[$scope.currency.length - 1][$scope.state.currency];
                                    return point;
                                });
                                chart.values = chart_value;
                                return chart;
                            });

                            xDomainRe(temp_multidata);   
                            $scope.multidata = temp_multidata;
                            yDomainRe();
                            if ($scope.api){
                                $scope.api.refresh();
                            }
            } else if (type == 'Percent Change'){
                            var temp_multidata = angular.copy($scope.multidata_base);
                            temp_multidata = temp_multidata.map(function(chart){
                                var chart_value = chart.values;
                                chart_value = chart_value.filter(function(point){
                                    return localtime < point.x;
                                });
                                chart_value = chart_value.sort(function(el1,el2){
                                   return el1.x - el2.x;
                                });
                                var start = chart_value[0].y;
                                var chart1 = angular.copy(chart_value);
                                chart_value.map(function(point,i,arr){
                                    if (i == 0){
                                        point.y = (point.y - start)/start*100;
                                    } else {
                                        point.y = (chart1[i].y - chart1[i - 1].y)/chart1[i - 1].y*100;
                                    }
                                    
                                    return point;
                                });
                                chart.values = chart_value;
                                return chart;
                            });
                            xDomainRe(temp_multidata); 
                            yDomainRe(temp_multidata);
                            $scope.multidata = temp_multidata;
                            if ($scope.api){
                                $scope.api.refresh();
                            }
            }
            if ($scope.multilines){
                height_of_chart +=25;
                setTimeout(function(){jQuery('svg.nvd3-svg').height(height_of_chart)},200);
            }

        }
        $scope.add_to_bundle = function(){
            //$scope.options.chart.height += 25;
            var temp = $scope.display();
            
            temp.color = getRandomColor();
            if ($scope.state.amber_type == 'Rough'){
                temp.key = $scope.state.amber_type + ' | ' + $scope.state.amber_class + ' | ' + $scope.state.form + ' | ' + $scope.state.frakcii + ' | ' + $scope.state.sort;
            } else if ($scope.state.amber_type == 'Beads') {
                temp.key = $scope.state.amber_type + ' | ' + $scope.state.amber_class + ' | ' + $scope.state.form + ' | ' + $scope.state.frakcii;
            } else if (($scope.state.amber_type == 'index')||($scope.state.amber_type == 'Indexes')) {
                temp.key = $scope.state.amber_type + ' | ' + $scope.state.amber_class + ' | ' +$scope.state.index_type + '/'+ $scope.state.sub_type;
            }
            var k = $scope.multidata.filter(function(i){
                return temp.key == i.key;
            });
            
            if (k.length != 0){
                setTimeout(function(){jQuery('svg.nvd3-svg').height(height_of_chart)},200);
                xDomainRe($scope.multidata); 
                yDomainRe($scope.multidata);
                return;
            }
            
            var base = custom_filter();
            var values_to_line_to_base = base.map(function(el){
                        return {
                            x:+(new Date(el.x.split('.').join('/'))),
                            y:+el.y
                        }
                    }).sort(function(el1,el2){
                   return el1.x - el2.x;
                });
            var temp_base = Object.assign({},temp,{values: values_to_line_to_base});
            $scope.multidata_base.push(temp_base);
            rebuild_multibundle($scope.graph.graph_time,$scope.graph.graph_type);
            
        }
        
        function count_current(){
            $scope.curr = {};
            $scope.select_options.amber_type.forEach(function(type){
                var cur = $scope.bundle.filter(function(data){
                    return type == data.amber_type
                }).sort(function(data1,data2){
                    return data1.time - data2.time
                });
                $scope.select_options.amber_class.forEach(function(subclass){
                    var nextcur = cur.filter(function(data){
                        return subclass == data.amber_class;
                    }).sort(function(data1,data2){
                        return data1.time - data2.time
                    });
                    $scope.curr[type+subclass] = nextcur[nextcur.length - 1];
                });
            });
        }

        function init_default_data(){
            $scope.basestate = {
              type: "amber",
              country: "Европа",
              form: "Opaque/Beadable",
              frakcii: "20-50g.",
              sort: "АА",
              currency: store.get('currency') || "EUR",
              amber_class: "Baltic",
              amber_type: "Rough",
              index_type: "General",
              date: null,
              sub_type: "Amber Index (AI)"
            };
            $scope.state = {
              type: "amber",
              country: "Европа",
              form: "Opaque/Beadable",
              frakcii: "20-50g.",
              sort: "ААА",
              currency: store.get('currency') || "EUR",
              amber_class: "Baltic",
              amber_type: "Rough",
              index_type: "General",
              date: null,
              sub_type: "Amber Index (AI)"
            };



            
        $scope.select_options = {
            country : ["Россия","Европа","Гонконг"],
            currency: ["EUR","RUB","USD","CNY","HKD","JPY","TRY","INR","MXN"],
            amber_class: ["Baltic","Indonesian (Sumatra)","Ukrainian","Mexican (Chiapas)","Dominican"],
            amber_type: ["Rough","Beads","Indexes"],
            index_type: ["Rough","Beads","Indexes"],
            sort: ["ААА","А","В","MIX","С"],
            form: ["Opaque/Beadable","Transparent/Beadable","Opaque/Flat","Transparent/Flat"],
            frakcii: ["1000g.","500g.","300g.","200g.","100g.","50-100g.","20-50g.","10-20g.","5-10g.","2.5-5g."],
            table: ["Rough (medium fractions)","Rough (large fractions)","Opaque beads","Transparent beads","Indexes"],
            graph_time: ["3 months","6 months","1 year","All data"],
            graph_type: ["Absolute values","Percent Change"]
        }
        $scope.graph = {
            graph_time: $scope.select_options.graph_time[0],
            graph_type: $scope.select_options.graph_type[0]
        };

        $scope.select_options.special = {
            amber_class: ["Baltic","Indonesian (Sumatra)","Ukrainian","Dominican"],
            frakcii: ["50-100g.","20-50g.","10-20g.","5-10g.","2.5-5g."],
            frakcii2: [">1000g.",">500g.",">300g.",">200g.",">100g.","50-100g.","20-50g.","10-20g.","5-10g.","2.5-5g."],
        }

        $scope.select_options.indonezian = {
            frakcii: [">300g.","50-300g.","<50g."],
            sort: ["ААА","АА","А","В","С"],
            table: ["Rough","Beads","Indexes"],
            form: ["ААА","АА","А","В","С"]
        }

        $scope.select_options.domenic = {
            frakcii: {
                raw:{
                    big: [">100g.","75-100g.","50-75g.","40-50g.","30-40g.","20-30g.","10-20g.","<10g."],
                    small: [">100g.","50-100g.","<50g."],
                },
                ball:["20+/5+","15+/2+","12+/1+","10+/0.5+","8+/0.25+","6+/0.1+","6-/0.1-"]
            },
            form: ["ААА","АА","А"],
            sort: ["Blue","Green","Yellow"],
            table: ["Rough (blue)","Rough (green)","Rough (yellow)","Beads (blue)","Beads (green)","Beads (yellow)","Indexes"],
        }

        $scope.indostate = {};
        $scope.indostate.form = "ААА";
        $scope.indostate.frakcii = ">1000g.";


        $scope.select_options.mexican = {
            table: ["Beads","Indexes"],
            amber_type:["Beads","Indexes"],
            form: ["Opaque/ААА","Opaque/АА","Opaque/А","Opaque/В","Opaque/С"]
        }

        $scope.table_state = "Rough (medium fractions)";
        
        $scope.select_options.ball = {
            frakcii: ["40mm+/30g+",
                        "35mm+/25g+",
                        "30mm+/20g+",
                        "25mm+/10g+",
                        "20mm+/5g+",
                        "15mm+/2g+",
                        "12mm+/1g+",
                        "10mm+/0.5g+",
                        "8mm+/0.25g+",
                        "6mm+/0.1g+",
                        "6мм-/0.1g-"],
            form: ["Opaque/ААА","Opaque/АА","Opaque/А","Opaque/В","Opaque/С","Transparent/ААА","Transparent/АА","Transparent/А","Transparent/В","Transparent/С"]
        };
        $scope.format_date = function (date) {
            var d= new Date(parseInt(date));
            var dd = d.getDate();
            var mm = d.getMonth()+1;//January is 0!`

            var yyyy = d.getFullYear();
            if(dd<10){dd='0'+dd}
            if(mm<10){mm='0'+mm}
            return dd+'.'+mm+'.'+yyyy;
        }
        $scope.tables = {};
        $scope.display = function (){
            var data = custom_filter(), values_to_line,values_to_line_to_base;
            if (data[0]){
                if ($scope.currency.length == 0){
                    $scope.currency = [{'EUR':1}];
                }
                if (!$scope.state.currency) {
                    $scope.state.currency = 'EUR';
                }
                values_to_line = data.map(function(el){
                        return {
                            x:+(new Date(el.x.split('.').join('/'))),
                            y:+el.y*$scope.currency[$scope.currency.length - 1][$scope.state.currency]
                        }
                    });
                
                values_to_line = values_to_line.sort(function(el1,el2){
                   return el1.x - el2.x;
                });

                var xDomainMin = values_to_line[0].x - 1000*60*60*24*1;
                var xDomainMax = 1000*60*60*24*1 + values_to_line[values_to_line.length - 1].x;

                if ($scope.multidata.length > 0){
                    $scope.options.chart.xDomain[0] = xDomainMin > $scope.options.chart.xDomain[0] ? $scope.options.chart.xDomain[0] : xDomainMin;
                    $scope.options.chart.xDomain[1] = xDomainMax > $scope.options.chart.xDomain[1] ? xDomainMax : $scope.options.chart.xDomain[1];
                } else {
                    $scope.options.chart.xDomain = [xDomainMin, xDomainMax];
                }
                
                y_values = values_to_line.sort(function(el1,el2){
                   return el1.y - el2.y;
                });
                var yDomainMin = values_to_line[0].y*0.96;
                var yDomainMax = values_to_line[values_to_line.length -1].y*1.04;
                if ($scope.multidata.length > 0){
                    $scope.options.chart.yDomain[0] = yDomainMin > $scope.options.chart.yDomain[0] ? $scope.options.chart.yDomain[0] : yDomainMin;
                    $scope.options.chart.yDomain[1] = yDomainMax > $scope.options.chart.yDomain[1] ? yDomainMax : $scope.options.chart.yDomain[1];
                } else {
                    $scope.options.chart.yDomain = [yDomainMin, yDomainMax];
                }
                
                values_to_line.sort(function(el1,el2){
                   return el1.x - el2.x;
                });
                return {
                    values: values_to_line,
                    key: 'Value('+$scope.state.currency+')',
                    color: '#74aa9d',
                    strokeWidth: 2,
                    classed: 'dashed'
                };
            }
            return {
                values: {x:0,y:0},
                key: 'Value('+$scope.state.currency+')',
                color: '#74aa9d',
                strokeWidth: 2,
                classed: 'dashed'
            };

            
        }
        $scope.criteria = criteria_func();
        $scope.multidata=[];
        $scope.multidata_base =[];
        $scope.options = {
            chart: {
                type: 'lineChart',
                width: 600,
                height: 300,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 75
                },
                noData:"Add charts for comparision",

                x: function(d){ if (!d) { if (jQuery('[ng-bind="item.form0.toFixed(2)"]')[0]) {
                    jQuery('[ng-bind="item.form0.toFixed(2)"]')[0].click();
                } else {
                    
                }} else {return d.x;} },
                y: function(d){ if (!d) {$scope.change_state($scope.basestate); console.log("wowowowo")} else {return d.y;} },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: '',
                    tickFormat: function(d) {
                        return d3.time.format('%d.%m.%y')(new Date(d))
                    },
                },
                yAxis: {
                    axisLabel: '',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                },
                refreshDataOnly: true,
            },
            title: {
                enable: true,
                text: ''
            },
            subtitle: {
                enable: true,
                text: '',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            },
            caption: {
                enable: false,
                html: 'Дата и Стоимость',
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
            }
        };
        }
        

        
        
        
        var base = [];

        function render_table_ball(){
            base = [];
            if ($scope.state.date){
                $scope.current = get_current_bundle($scope.state.date.value,$scope.state.amber_class,'Beads');
            }
            if ($scope.current){
                if ($scope.state.amber_class == 'Dominican'){
                    $scope.select_options.domenic.frakcii.ball.forEach(function(option){
                        base.push({
                            frakcii: option
                        });
                    });
                    var base_blue = angular.copy(base).map(function(arr){
                        $scope.select_options.domenic.form.forEach(function(fo,i){
                                arr["form"+i] = get_element_table({
                                    frakcii: arr.frakcii,
                                    sort: 'Blue',
                                    form: fo,
                                    type: 'Beads'
                                });
                        });
                        arr.mm = arr.frakcii.split('/')[0];
                        arr.gr = arr.frakcii.split('/')[1];
                        return arr;
                    });
                    var base_green = angular.copy(base).map(function(arr){
                        $scope.select_options.domenic.form.forEach(function(fo,i){
                                arr["form"+i] = get_element_table({
                                    frakcii: arr.frakcii,
                                    sort: 'Green',
                                    form: fo,
                                    type: 'Beads'
                                });
                        });
                        arr.mm = arr.frakcii.split('/')[0];
                        arr.gr = arr.frakcii.split('/')[1];
                        return arr;
                    });
                    var base_yellow = angular.copy(base).map(function(arr){
                        $scope.select_options.domenic.form.forEach(function(fo,i){
                                arr["form"+i] = get_element_table({
                                    frakcii: arr.frakcii,
                                    sort: 'Yellow',
                                    form: fo,
                                    type: 'Beads'
                                });
                        });
                        arr.mm = arr.frakcii.split('/')[0];
                        arr.gr = arr.frakcii.split('/')[1];
                        return arr;
                    });
                    base_blue = set_currency(base_blue);
                    base_green = set_currency(base_green);
                    base_yellow = set_currency(base_yellow);
                    $scope.tables.ball_blue = new NgTableParams({count:100}, {dataset: base_blue});
                    $scope.tables.ball_green = new NgTableParams({count:100}, {dataset: base_green});
                    $scope.tables.ball_yellow = new NgTableParams({count:100}, {dataset: base_yellow});
                    $scope.tables.ball_blue.reload();
                    $scope.tables.ball_green.reload(); 
                    $scope.tables.ball_yellow.reload();
                    
                } else {
                $scope.select_options.ball.frakcii.forEach(function(option){
                    base.push({
                        frakcii:option
                    });
                });


                var base_opacue = angular.copy(base).map(function(arr){
                    $scope.select_options.ball.form.slice(0,5).forEach(function(fo,i){
                        arr["form"+i] = get_element_table({
                            frakcii: arr.frakcii,
                            form: fo,
                            type: 'Beads'
                        });
                    });
                    arr.mm = arr.frakcii.split('/')[0];
                    arr.gr = arr.frakcii.split('/')[1];
                    return arr;
                });
                var base_transparent = angular.copy(base).map(function(arr){
                    $scope.select_options.ball.form.slice(5,10).forEach(function(fo,i){
                        arr["form"+i] = get_element_table({
                            frakcii: arr.frakcii,
                            form: fo,
                            type: 'Beads'
                        });
                    });
                    arr.mm = arr.frakcii.split('/')[0];
                    arr.gr = arr.frakcii.split('/')[1];
                    return arr;
                });
                base_opacue = set_currency(base_opacue);
                base_transparent = set_currency(base_transparent);

                $scope.tables.ball = new NgTableParams({count:100}, {dataset: base_opacue});
                $scope.tables.ball_opacue = new NgTableParams({count:100}, {dataset: base_opacue});
                $scope.tables.ball_transparent = new NgTableParams({count:100}, {dataset: base_transparent});
                $scope.tables.ball.reload();
                $scope.tables.ball_opacue.reload(); 
                $scope.tables.ball_transparent.reload();
            }
            } else {
                $scope.tables.ball = null;
                $scope.tables.ball_opacue = null;
                $scope.tables.ball_transparent = null;
            }

            
        }
        
        function set_currency(base){
            var cur;
            if ($scope.currency.length == 0) {
                cur = 1;
            } else {
                cur = $scope.currency[$scope.currency.length - 1][$scope.state.currency];
            }
            return base.map(function(item){
               return Object.assign({},item,{form0:Math.round(item.form0*cur * 100) / 100,
                                            form1:Math.round(item.form1*cur * 100) / 100,
                                            form2:Math.round(item.form2*cur * 100) / 100,
                                            form3:Math.round(item.form3*cur * 100) / 100,
                                            form4:Math.round(item.form4*cur * 100) / 100,
                                            form5:Math.round(item.form5*cur * 100) / 100,
                                            sort1:Math.round(item.sort1*cur * 100) / 100,
                                            sort2:Math.round(item.sort2*cur * 100) / 100,
                                            sort0:Math.round(item.sort0*cur * 100) / 100,
                                            sort3:Math.round(item.sort3*cur * 100) / 100,
                                            sort4:Math.round(item.sort4*cur * 100) / 100 //переделать в более компактный вид
                                            }) 
            });
        }

        $scope.cutedges = function(input){
            if (input){
                return input.split('/')[1][0]+input.split('/')[0][0];
            }
            
        }

        $scope.getFirstWord = function (input) {
            if (input){
                return input.split('/')[0];
            }
        }
        function render_table_raw(){
            base = [];
            if ($scope.state.date){
            $scope.current = get_current_bundle($scope.state.date.value,$scope.state.amber_class,'Rough');
        }
            if ($scope.current) {
            if ($scope.state.amber_class == 'Indonesian (Sumatra)'){
                $scope.select_options.indonezian.frakcii.forEach(function(option){
                    base.push({
                        frakcii: option
                    });
                });
            } else if ($scope.state.amber_class == 'Dominican'){
                            $scope.select_options.domenic.frakcii.raw.big.forEach(function(option){
                                base.push({
                                    frakcii: option
                                });
                            });
                    var base_blue = angular.copy(base).map(function(arr){
                        $scope.select_options.domenic.form.forEach(function(fo,i){
                                arr["form"+i] = get_element_table({
                                    frakcii: arr.frakcii,
                                    sort: 'Blue',
                                    form: fo,
                                    type: 'Rough'
                                });
                        });
                        arr.mm = arr.frakcii.split('/')[0];
                        arr.gr = arr.frakcii.split('/')[1];
                        return arr;
                    });
                    base_blue = set_currency(base_blue);
                    $scope.tables.raw_blue = new NgTableParams({count:100}, {dataset: base_blue});
                    $scope.tables.raw_blue.reload();
                    base = [];

                            $scope.select_options.domenic.frakcii.raw.small.forEach(function(option){
                                base.push({
                                    frakcii: option
                                });
                            });
                    var base_green = angular.copy(base).map(function(arr){
                        $scope.select_options.domenic.form.forEach(function(fo,i){
                                arr["form"+i] = get_element_table({
                                    frakcii: arr.frakcii,
                                    sort: 'Green',
                                    form: fo,
                                    type: 'Rough'
                                });
                        });
                        arr.mm = arr.frakcii.split('/')[0];
                        arr.gr = arr.frakcii.split('/')[1];
                        return arr;
                    });
                    base_green = set_currency(base_green);
                    $scope.tables.raw_green = new NgTableParams({count:100}, {dataset: base_green});
                    $scope.tables.raw_green.reload(); 
                    base = [];

                            $scope.select_options.domenic.frakcii.raw.small.forEach(function(option){
                                base.push({
                                    frakcii: option
                                });
                            });

                    var base_yellow = angular.copy(base).map(function(arr){
                        $scope.select_options.domenic.form.forEach(function(fo,i){
                                arr["form"+i] = get_element_table({
                                    frakcii: arr.frakcii,
                                    sort: 'Yellow',
                                    form: fo,
                                    type: 'Rough'
                                });
                        });
                        arr.mm = arr.frakcii.split('/')[0];
                        arr.gr = arr.frakcii.split('/')[1];
                        return arr;
                    });
                    
                    
                    base_yellow = set_currency(base_yellow);
                    
                    
                    $scope.tables.raw_yellow = new NgTableParams({count:100}, {dataset: base_yellow});
                    
                    
                    $scope.tables.raw_yellow.reload();
                        


            } else {
                $scope.select_options.frakcii.forEach(function(option){
                        var b = ['100g.','200g.','300g.','500g.','1000g.'].reverse();
                            var biggy = !b.some(function(el){
                                return el == option;
                            });
                            base.push({
                                frakcii:option,
                                form:"Opaque/Beadable"
                            });
                            base.push({
                                frakcii:option,
                                form:"Transparent/Beadable"
                            });
                            if (biggy){
                                base.push({
                                    frakcii:option,
                                    form:"Opaque/Flat"
                                });
                            }


                            if (biggy){
                                base.push({
                                    frakcii:option,
                                    form:"Transparent/Flat"
                                });
                            }

                });
            }

            if ($scope.state.amber_class == 'Indonesian (Sumatra)'){
                base.map(function(arr){
                    $scope.select_options.indonezian.sort.forEach(function(so,i){
                        arr["form"+i]= get_element_table({
                            frakcii: arr.frakcii,
                            form: arr.form,
                            sort: so,
                            type: 'Rough'
                        });
                    });
                    return arr;
                });
            } else {
                base.map(function(arr){
                    $scope.select_options.sort.forEach(function(so,i){
                    
                        arr["form"+i]= get_element_table({
                            frakcii: arr.frakcii,
                            form: arr.form,
                            sort: so,
                            type: 'Rough'
                        });
                    });
                    return arr;
                });
               
            }

            base = set_currency(base);
            var big_base = base.filter(function(row){
                var b = ['100g.','200g.','300g.','500g.','1000g.'].reverse();
                return b.some(function(val){
                    return row.frakcii == val;
                });
            });
            $scope.tables.bigraw = new NgTableParams({count:100}, {dataset: big_base});
            $scope.tables.bigraw.reload();
            var small_base = base.filter(function(row){
                var b = ['100g.','200g.','300g.','500g.','1000g.'].reverse();
                return b.every(function(val){
                    return row.frakcii != val;
                });
            });
            $scope.tables.raw = new NgTableParams({count:100}, { dataset: small_base});
            $scope.tables.raw.reload();
            }

        }
        
        function make_up_deals(deals){
            if(deals[0]){
                deals = deals[0].data.map(function(deal) {
                    return Object.assign({},deal,{positive:(+(deal.diff)>0)});
                })
                $scope.deals = new NgTableParams({count:100},{dataset: deals});
            }
        }
        
        function get_element_table(sort_param){
            var criteria,result;
            sort_param.country = $scope.state.country;
            if (sort_param.type == 'Rough') {
                if ((sort_param.sort == "Низкое") || (sort_param.sort == "Черный лак")){
                    criteria = function(value){
                        return ((value.country == sort_param.country)&&(value.frakcii ==  sort_param.frakcii)&&(value.sort == sort_param.sort));
                    }   
                } else {
                    criteria = function(value){
                        return ((value.country == sort_param.country)&&(value.form == sort_param.form)&&(value.frakcii ==  sort_param.frakcii)&&(value.sort == sort_param.sort));
                    }
                }
                
            } else if (sort_param.type = 'Beads'){
                if ((sort_param.sort == 'Blue')||(sort_param.sort == 'Green')||(sort_param.sort == 'Yellow')){
                    criteria = function(value){
                            return ((value.country == sort_param.country)&&(value.frakcii ==  sort_param.frakcii)&&(value.form == sort_param.form)&&(value.sort == sort_param.sort));
                    }
                } else {
                    criteria = function(value){
                            return ((value.country == sort_param.country)&&(value.frakcii ==  sort_param.frakcii)&&(value.form == sort_param.form));
                    }
                }

            }
            if ($scope.init_date == 'Rough'){
                result = $scope.price_table['Rough'].filter(criteria)[0];
            } else if ($scope.init_date == 'Beads'){
                result = $scope.price_table['Beads'].filter(criteria)[0];
            } else {
                result = $scope.current.filter(criteria)[0];
            }
            if (result){
                return result.value;
            } else {
                return 0;
            }
            
        }
        
        
  
        
        
        
        $scope.change_state = function(updates) {
            $scope.state = Object.assign($scope.state,updates);
        };
        
        function getRandomColor() {
            var letters = '0123456789abcdef';
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        //$scope.data = sinAndCos();

        function yDomainRe(pass_data) {
            if (!pass_data) pass_data = $scope.multidata;
            var yDomainMin=Number.POSITIVE_INFINITY,yDomainMax=0;
            pass_data.forEach(function (graph) {
                graph.values.forEach(function (data) {

                    if (data.y > yDomainMax){
                        yDomainMax = data.y;
                    }
                    if (data.y < yDomainMin){
                        yDomainMin = data.y;
                    }
                });
            });
            if (yDomainMin < 0){
                $scope.options.chart.yDomain = [yDomainMin*1.04, yDomainMax*1.04];
            } else {
                $scope.options.chart.yDomain = [yDomainMin*0.96, yDomainMax*1.04];
            }
            

        }

        function xDomainRe(pass_data) {
            if (!pass_data) pass_data = $scope.multidata;
            var xDomainMin=Number.POSITIVE_INFINITY,xDomainMax=0;
            pass_data.forEach(function (graph) {

                graph.values.forEach(function (data) {
                    if (data.x > xDomainMax){
                        xDomainMax = data.x;
                    }
                    if (data.x < xDomainMin){
                        xDomainMin = data.x;
                    }
                });
            });
            $scope.options.chart.xDomain = [xDomainMin, xDomainMax];

        }
        

        function criteria_func(){
           if ($scope.state.amber_type == 'Rough'){
                if ($scope.state.amber_class == 'Indonesian (Sumatra)'){
                    return function(value){
                        return ((value.country == $scope.state.country)&&(value.frakcii == $scope.state.frakcii)&&(value.sort == $scope.state.sort));
                    }
                } else {
                    return function(value){
                        return ((value.country == $scope.state.country)&&(value.form == $scope.state.form)&&(value.frakcii == $scope.state.frakcii)&&(value.sort == $scope.state.sort));
                    }  
                }

           } else if ($scope.state.amber_type == 'Beads'){
                if (($scope.state.sort == 'Blue')||($scope.state.sort == 'Green')||($scope.state.sort == 'Yellow')){
                    return function(value){
                        return ((value.country == $scope.state.country)&&(value.frakcii == $scope.state.frakcii)&&(value.form == $scope.state.form)&&(value.sort == $scope.state.sort));
                    }
                } else {
                   return function(value){
                       return ((value.country == $scope.state.country)&&(value.form == $scope.state.form)&&(value.frakcii == $scope.state.frakcii));
                   }
               }
           } else if (($scope.state.amber_type == 'index')||($scope.state.amber_type == 'Indexes')){
                return function(value){
                   return ((value.country == $scope.state.country)&&(value.sub_type == $scope.state.sub_type));
               }
           }
           return function(){
               return true;
           }
       }
       
        
        function custom_filter(){
            return $scope.main&&$scope.main.map(function(date){
                var val = date.data.filter($scope.criteria)[0] || {value:0};
                return {
                    x: date.title.split('/')[1],
                    y: val.value
                }
            })
        }
        
        function getRandomInt(min, max)
        {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }


        /*Random Data Generator */
        function sinAndCos() {
            var sin = [],sin2 = [],
                cos = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 100; i++) {
                sin.push({x: i, y: Math.sin(i/10)});
                sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
                cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
            }

            //Line chart data should be sent as an array of series objects.
            return [
                {
                    values: sin,      //values - represents the array of {x,y} data points
                    key: 'Sine Wave', //key  - the name of the series.
                    color: '#ff7f0e',  //color - optional: choose your own line color.
                    strokeWidth: 2,
                    classed: 'dashed'
                }
            ];
        };
}]);


if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target, firstSource) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

window.init_slider = function(){
  jQuery('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
    var slideCount = jQuery('#slider ul li').length;
    var slideWidth = jQuery('#slider ul li').width();
    var slideHeight = jQuery('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    jQuery('#slider').css({ width: slideWidth, height: slideHeight });
    
    jQuery('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    jQuery('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        jQuery('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            jQuery('#slider ul li:last-child').prependTo('#slider ul');
            jQuery('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        jQuery('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            jQuery('#slider ul li:first-child').appendTo('#slider ul');
            jQuery('#slider ul').css('left', '');
        });
    };

    jQuery('a.control_prev').click(function () {
        moveLeft();
    });

    jQuery('a.control_next').click(function () {
        moveRight();
    });
} 
jQuery( document ).ready(function() {
jQuery('.b-news .fusion-post-content-container p:last-of-type').each(function() {
  jQuery(this).text(jQuery(this).text()+'...');
});
    jQuery('.related-posts .title-heading-left').text('Other publications');
});
</script>