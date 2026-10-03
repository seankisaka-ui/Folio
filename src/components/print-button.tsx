"use client";
import { Printer } from "lucide-react";
export function PrintButton() { return <button className="btn btn-primary no-print" type="button" onClick={() => window.print()}><Printer size={20} aria-hidden="true" />Print report</button>; }
