/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace ui {
        export namespace c {

            declare let BMap: any;
            declare let BMAP_ANCHOR_TOP_LEFT: any;
            declare let BMAP_ANCHOR_TOP_RIGHT: any;
            /**
             * 视图-地图
             */
            export class DemoMapView extends ibas.View implements app.IDemoMapView {
                /** 绘制视图 */
                draw(): any {
                    this.txtLng = new sap.m.Input("");
                    this.txtLat = new sap.m.Input("");
                    let that: this = this;
                    let page: sap.m.Page = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.MenuButton("", {
                                    text: "Map",
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://map",
                                    width: "auto",
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: "Baidu",
                                                icon: "sap-icon://map",
                                                press: function (): void {
                                                    that.loadBaiduMap();
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: "Gaode",
                                                icon: "sap-icon://map",
                                                press: function (): void {
                                                    //
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: "Google",
                                                icon: "sap-icon://map",
                                                press: function (): void {
                                                    //
                                                }
                                            }),
                                        ],
                                    })
                                }),
                                this.txtLng,
                                this.txtLat,
                            ],

                        }),
                        content: [
                            new sap.ui.core.HTML("", {
                                content: "<div  id='map' style='width:100%;height:100%'></div>",
                            })
                        ]
                    });
                    return page;
                }

                private txtLng: sap.m.Input;
                private txtLat: sap.m.Input;

                private loadBaiduMap(): void {
                    let that: this = this;
                    let mapLibraries: string[] = new Array();
                    mapLibraries.push("http://api.map.baidu.com/getscript?v=2.0&ak=0tAfPNP8bYG9ZUUkkvgu8Fv48ng9uFfl&services=&t=20170803155555");
                    mapLibraries.push("http://api.map.baidu.com/api?v=2.0&ak=0tAfPNP8bYG9ZUUkkvgu8Fv48ng9uFfl");
                    require(mapLibraries, function (ui: any): void {
                        let map: any = new BMap.Map("map");
                        let point: any = new BMap.Point(116.404, 38.915);

                        map.centerAndZoom(point, 14);
                        let pt: any = new BMap.Point(116.404, 39.913);
                        // let myIcon: any = new BMap.Icon(fox.gif", new BMap.Size(300, 157));
                        // let marker: any = new BMap.Marker(pt, { icon: myIcon });
                        let marker: any = new BMap.Marker(pt);
                        marker.enableDragging();
                        map.addOverlay(marker);
                        map.enableScrollWheelZoom(true);

                        marker.addEventListener("click", function (e: any): void {
                            let p: any = e.target;
                            that.txtLng.setValue(p.getPosition().lng);
                            that.txtLat.setValue(p.getPosition().lat);
                        });
                        // 左上角，添加比例尺
                        let top_left_control: any = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT });
                        // 左上角，添加默认缩放平移控件
                        let top_left_navigation: any = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT });
                        map.addControl(top_left_control);
                        map.addControl(top_left_navigation);

                        let size: any = new BMap.Size(10, 20);

                        map.addControl(new BMap.CityListControl({
                            anchor: BMAP_ANCHOR_TOP_RIGHT,
                            offset: size,
                            // 切换城市之间事件
                            onChangeBefore: function (): void {
                                that.application.viewShower.proceeding(
                                    that,
                                    ibas.emMessageType.WARNING,
                                    "before city change."
                                );
                            },
                            // 切换城市之后事件
                            onChangeAfter: function (): void {
                                that.application.viewShower.proceeding(
                                    that,
                                    ibas.emMessageType.WARNING,
                                    "city changed."
                                );
                            }
                        }));
                        let geolocation: any = new BMap.Geolocation();
                        geolocation.getCurrentPosition(
                            function (r: any): void {
                                if (this.getStatus() === 0) {
                                    let mk: any = new BMap.Marker(r.point);
                                    map.addOverlay(mk);
                                    map.panTo(r.point);
                                    that.txtLat.setValue(r.point.lat);
                                    that.txtLng.setValue(r.point.lng);
                                } else {
                                    that.application.viewShower.messages({
                                        title: that.application.description,
                                        message: this.getStatus(),
                                        type: ibas.emMessageType.ERROR
                                    });
                                }
                            }, {
                                enableHighAccuracy: true
                            });
                    });
                }
            }
        }
    }
}