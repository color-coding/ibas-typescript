/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import { IDemoMapView } from "../../../bsapp/others/index";
declare var BMap;
declare var BMAP_ANCHOR_TOP_LEFT ;
declare var BMAP_ANCHOR_TOP_RIGHT ;
/**
 * 视图-地图
 */
export class DemoMapView extends ibas.View implements IDemoMapView {
    /** 绘制视图 */
    darw(): any {
        let lngtxt:sap.m.Input=new sap.m.Input("");
        let lattxt:sap.m.Input=new sap.m.Input("");
        let page: sap.m.Page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: "加载地图",
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://synchronize",
                        press: function (event: any): void {
                            var map = new BMap.Map('map');
                            var point = new BMap.Point(116.404, 38.915);

                            map.centerAndZoom(point, 14);
                            var pt = new BMap.Point(116.404, 39.913);
                            //var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300, 157));
                            //var marker = new BMap.Marker(pt, { icon: myIcon });
                            var marker = new BMap.Marker(pt);
                            marker.enableDragging()
                            map.addOverlay(marker);
                            map.enableScrollWheelZoom(true);

                            marker.addEventListener("click",attribute);
                            function attribute(e){
                                var p = e.target;
                                lngtxt.setValue(p.getPosition().lng);
                                lattxt.setValue(p.getPosition().lat);
                                //alert("marker的位置是" + p.getPosition().lng + "," + p.getPosition().lat);
                            }

                            var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
                            var top_left_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT});  //左上角，添加默认缩放平移控件
                            map.addControl(top_left_control);
                            map.addControl(top_left_navigation);

                            var size = new BMap.Size(10, 20);

                            map.addControl(new BMap.CityListControl({
                                anchor: BMAP_ANCHOR_TOP_RIGHT,
                                offset: size,
                                // 切换城市之间事件
                                // onChangeBefore: function(){
                                //    alert('before');
                                // },
                                // 切换城市之后事件
                                // onChangeAfter:function(){
                                //   alert('after');
                                // }
                            }));

                            var geolocation = new BMap.Geolocation();
                            geolocation.getCurrentPosition(function(r){
                                if(this.getStatus() == 0){
                                    var mk = new BMap.Marker(r.point);
                                    map.addOverlay(mk);
                                    map.panTo(r.point);
                                    //alert('您的位置：'+r.point.lng+','+r.point.lat);
                                }
                                else {
                                    alert('failed'+this.getStatus());
                                }
                            },{enableHighAccuracy: true})
                        }
                    }),
                    lngtxt,
                    lattxt
                ],

            }),
            content: [
                new sap.ui.core.HTML("", {
                    content: "<div  id='map' style='width:100%;height:100%'></div>",
                })
            ]
        });

        return page
    }
}