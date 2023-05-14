function prependProtocol(url, protocol = "https") {
    if (typeof url !== "string") {
        throw new Error("URL should be a string.");
    }

    const match = /^[a-z]+:\/\//i.exec(url);
    if (match) {
        const existingProtocol = match[0];
        if (existingProtocol.toLowerCase() === `${protocol.toLowerCase()}://`) {
            return url;
        } else {
            return `${protocol}://${url.slice(existingProtocol.length)}`;
        }
    }

    if (protocol === "https" && /^www\./i.test(url)) {
        return `https://${url}`;
    }

    return `${protocol}://${url}`;
}