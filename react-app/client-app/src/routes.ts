import { FC } from "react";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import User from "./pages/User/User";
import Resources from "./pages/Resources/Resources";
import Resource from "./pages/Resource/Resource";
import CreateUser from "./pages/CreateUser/CreateUser";
import CreatePage from "./pages/CreateUser/CreateInfo/CreatePage";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
import UpdatePage from "./pages/UpdateUser/UpdateInfo/UpdatePage";

interface IRoute {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<IRoute> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        component: Products
    },
    {
        key: 'user-route',
        title: 'User',
        path: '/user/:id',
        enabled: false,
        component: User
    },
    {
        key: 'resources-route',
        title: 'Resources',
        path: '/resources',
        enabled: true,
        component: Resources
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/resource/:id',
        enabled: false,
        component: Resource
    },
    {
        key: 'createUser-route',
        title: 'Create User',
        path: '/user/create/',
        enabled: true,
        component: CreateUser
    },
    {
        key: 'show_info-route',
        title: 'Show Info',
        path: '/show_info',
        enabled: false,
        component: CreatePage
    },
    {
        key: 'update-route',
        title: 'Update',
        path: '/update/:id',
        enabled: false,
        component: UpdateUser
    },
    {
        key: 'update_info-route',
        title: 'Show Info',
        path: '/update_info',
        enabled: false,
        component: UpdatePage
    },


]