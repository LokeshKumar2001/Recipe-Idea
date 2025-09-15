"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RegisterInput, registerSchema } from "../../../lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (values: RegisterInput) => {
    try {
      const res = await axios.post("/api/auth/register", values, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200) {
        router.push("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 p-6 border rounded flex flex-col gap-4"
      >
        <h2 className="text-xl sm:text-4xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>
        <input
          {...register("name")}
          placeholder="Name"
          className="p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <input
          {...register("email")}
          placeholder="Email"
          className="p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
          Register
        </button>
        <div>
          Already have an account?
          <Link href="/login" className="ml-2 text-blue">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
