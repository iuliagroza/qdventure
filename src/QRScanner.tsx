import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

import styles from "./styles/qrscanner.module.scss"

const QRScanner = (props: any) => {
    const [data, setData] = useState("");

    const handleResult = async (result: any, error: any) => {
        if (!!result) {
            handleScan(result?.text);
        }

        if (!!error) {
            handleError(error);
        }
    }

    const handleScan = (scanData: any) => {
        if (scanData && scanData !== "") {
            console.log("Scanned QR data:", scanData);
            setData(scanData);
        }
    };

    const handleError = (err: any) => {
        // console.error(err);
    };

    return (
        <>
            <div className={styles.container}>
                <p className={styles.result}>{data}</p>
                <div className={styles.scanner}>
                    <QrReader
                        constraints={{ facingMode: "environment" }}
                        scanDelay={1000}
                        onResult={handleResult}
                        {...(props as any)}
                    />
                </div>
            </div>

            <div id={styles.darken}></div>
            <div id={styles.overlay} className={styles.animateflicker}><div></div></div>
            <div id={styles.scannerbar} className={styles.animatemove}></div>

            <p className={styles.hint}>Scan QR Code</p>
        </>

    );
};

export default QRScanner;
