import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Image from 'next/image';

function MDXImage(props) {
  return (
    <Zoom>
      <Image
        alt={props.alt}
        src={props.src}
        quality="100"
        width={3840}
        height={2160}
      />
    </Zoom>
  );
}

export default MDXImage;
