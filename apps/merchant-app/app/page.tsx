"use client"
import {useBalance} from "@repo/store/useBalance"

export default function Page(): JSX.Element {
  const balance = useBalance();
  return (
    <div>
      Hi there {balance} from merchant.
    </div>
  );
}
