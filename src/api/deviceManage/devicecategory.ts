import { http } from "@/utils/http";
import { Convert, Ctool } from "@/model/devicecategoryModel";



type Result = {
    success:   boolean;
    msg:       string;
    code:      number;
    result:    Result;
    timestamp: number;
}

export const listDevicecategory = (data?: object) => {
  return http.request<Result>("get", "/ems/devicecategory/list", { data });
};

// // 查询设备分类列表
// export function listDevicecategory(query) {
//   return request({
//     url: '/ems/devicecategory/list',
//     method: 'get',
//     params: query
//   })
// }

// // 查询设备分类详细
// export function getDevicecategory(id) {
//   return request({
//     url: '/ems/devicecategory/' + id,
//     method: 'get'
//   })
// }

// // 新增设备分类
// export function addDevicecategory(data) {
//   return request({
//     url: '/ems/devicecategory',
//     method: 'post',
//     data: data
//   })
// }

// // 修改设备分类
// export function updateDevicecategory(data) {
//   return request({
//     url: '/ems/devicecategory',
//     method: 'put',
//     data: data
//   })
// }

// // 删除设备分类
// export function delDevicecategory(id) {
//   return request({
//     url: '/ems/devicecategory/' + id,
//     method: 'delete'
//   })
// }
