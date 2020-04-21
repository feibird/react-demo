/**
 * 全局管理状态
 * useGlobalStore: const [number, setnumber] = useGlobalStore("testnumber");用来获取全局的状态值
 * initGlobalState: 初始化全局状态
 * changeState: changeState("testnumber", Math.random()); 更新全局状态
}
 */
import { initGlobalState } from "@masx200/react-simple-global-state-store-hook";

initGlobalState({
  token: "",
  topMenuId: "",
});
