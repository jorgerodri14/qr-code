import React, { useEffect, useRef } from "react";
import { default as QRGenerator, QRCodeRenderersOptions,  } from "qrcode";
import type { QRCodeSegment } from "qrcode";

type QRCodeProps = {
  data: string | QRCodeSegment[];
} & QRCodeRenderersOptions

const QRCode: React.FC<QRCodeProps> = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRGenerator.toCanvas(
        canvasRef.current,
        data,
        {
            errorCorrectionLevel: 'H',
            maskPattern: 4
        },
        function (error) {
          if (error) console.error(error);
          console.log("success!");
        }
      );
    }
  }, [canvasRef.current]);

  return <canvas ref={canvasRef} />;
};

export const QRCodeMemo = React.memo(QRCode);
