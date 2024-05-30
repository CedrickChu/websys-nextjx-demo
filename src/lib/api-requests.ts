import { FilteredUser, UserLoginResponse, UserResponse } from "./types";
import axios from 'axios';

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors));
    }

    throw new Error(data.message || response.statusText);
  }

  return data as T;
}

export async function apiRegisterUser(
  credentials: string
): Promise<FilteredUser> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<UserResponse>(response).then((data) => data.data.user);
}

export async function apiLoginUser(credentials: string): Promise<string> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<UserLoginResponse>(response).then((data) => data.token);
}

export async function apiLogoutUser(): Promise<void> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return handleResponse<void>(response);
}

export async function apiGetAuthUser(token?: string): Promise<FilteredUser> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const response = await fetch(`${SERVER_ENDPOINT}/api/users/me`, {
    method: "GET",
    credentials: "include",
    headers,
  });

  return handleResponse<UserResponse>(response).then((data) => data.data.user);
}

export async function apiUpdateAuthUser(token: string, userData: UserData){
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
  
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    
    const response = await fetch(`${SERVER_ENDPOINT}/api/users/update`, {
      method: "PUT",
      credentials: "include",
      headers,
      body: JSON.stringify(userData)
    });
  
    return handleResponse<UserResponse>(response).then((data) => data.data.user);
}
  export interface UserData {
    id: string;
    email: string;
    name: string;
    role?: string;
    photo?: string;
    verified?: boolean;
    createdAt?: string;
    updatedAt?: string;
  }

export async function apiGetAllUsers(token?: string): Promise<FilteredUser[]> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
  
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  
    const response = await fetch(`${SERVER_ENDPOINT}/api/users/all`, {
      method: "GET",
      credentials: "include",
      headers,
    });
  
    return handleResponse<FilteredUser[]>(response);
  }


  export async function getUserById(userId: string, token?: string): Promise<FilteredUser> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
  
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  
    const response = await fetch(`${SERVER_ENDPOINT}/api/users/${userId}`, {
      method: "GET",
      credentials: "include",
      headers,
    });
  
    return handleResponse<UserResponse>(response).then((data) => data.data.user);
  }
