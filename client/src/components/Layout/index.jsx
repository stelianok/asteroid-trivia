import { AppLayout } from "./styles";
import NavigationBar from "./NavigationBar";

export default function Layout({ children }) {
  return <AppLayout header={<NavigationBar />}>{children}</AppLayout>;
}
