//import { json } from "@remix-run/node";

//export async function loader({ request }) {
  // Placeholder: manual + OOS sorting logic to be added later
 // return json({ products: [] });
//}

export default function handler(req, res) {
  res.status(200).json({
    message: "Hello! Collection Sort App Proxy is working."
  });
}

