import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { KTX2Loader } from "three-stdlib";

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath(`${baseUrl}basis/`);

export function useGLTFWithKTX2(path) {
  const { gl } = useThree();

  const resolvedPath = path.startsWith("/")
    ? `${baseUrl}${path.slice(1)}`
    : path;

  return useGLTF(resolvedPath, true, true, (loader) => {
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  });
}
