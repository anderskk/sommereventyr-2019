const quotes = {
    welcome: atob('VmVsa29tbWVuIHRpbCB0ZW1wb2V0YXBwZW4hIEhlciBoYW5kbGVyIGRldCBvbSB0aWQgLSBs+HMgYWxsZSBvcHBnYXZlbmUgaW5uZW4gNjAgc2VrdW5kZXIgb2cgZHUgZSB2aWRlcmUh'),
    isPlaying: atob('RGEgdmFyIHZpIGkgZ2FuZyEgxiBoYXIgdHJ1YSE='),
    correctAnswer_1: atob('S29ycmVrdCBzdmFyISBCcmEgam9iYmEh'),
    correctAnswer_2: atob('UmlrdGlnISBEZXR0ZSBrYW4gZHUh'),
    wrongAnswer_1: atob('RGV0IHZhciBub2sgZmVpbCwgZ2l0dC4uLg=='),
    wrongAnswer_2: atob('RmVpbCBzdmFyLCBwcvh2IGlnamVu'),
    allTasksCompleted: atob('RHUga2xhcnRlIGRldCEgSOVwZXIgZGV0dGUgaGFyIHbmcnQgbGlrZSBtb3JvIGZvciBk5iBzb20gZGV0IHZhciBmb3IgbeYuIEhlciBlciBsaW5rZW4gdGlsIG5lc3RlIGV0YXBwZSwgdmVsIGZvcnRqZW50IQ=='),
    noTimeLeft_tryAgain: atob('QWlpaWksIGRlciB2YXIgdGlkZW4gdXRlLiBIZWxkaWd2aXMgZXIgZGV0IHZlbGRpZyBsZXR0IOUgcHL4dmUgcOUgbnl0dC4'),
    noTimeLeft_smallHint: atob('RXIgZGV0IGZvciBsaXRlbiB0aWQ/IEh2aXMgZGV0IGJhcmUgaGFkZGUgduZydCBlbiBt5XRlIOUgZuUgdGlkZW4gdGlsIOUgZ+Ugc2FrdGVyZSBw5S4uLg=='),
    noTimeLeft_bigHint: atob('SG1tLCBkZXR0ZSB2YXIgdmFuc2tlbGlnLiDGIGtqZW5uZXIgZW4gbGVnZSBzb20ga2Fuc2tqZSBrYW4gaGplbHBlLiBIYW4gaGV0ZXIgTXIuIFdpbmRvdy4gU+UgaGFuIHNpc3QgaSBjb25zb2xlJ2Vu'),
    buttonFailure_mock: atob('S2plbXBlbGV0dCDlIHBy+HZlIHDlIG55dHQu'),
    buttonFailure_needHint: atob('RHUgdHJlbmdlciBrYW5za2plIGV0IGhpbnQ/'),
    buttonFailure_tabHint: atob('SHZpcyBkZXQgYmFyZSBmYW50ZXMgYW5kcmUgbeV0ZXIg5SB0cnlra2UgcOUgZW4ga25hcHAuLi4='),
    buttonFailure_tabIndexHint: atob('SHZhIGVyIGRldCBzb20gZm9yaGluZHJlciB0YWJiaW5nPw=='),
    doping: atob('U2UgZGVyIGphISBEdSBzZXIgc3RlcmtlcmUgdXQgYWxsZXJlZGUuIExhIG9zcyBiYXJlIGjlcGUgZGV0IGlra2UgYmxpciBub2VuIGRvcGluZ3By+HZlci4uLg==')
}

export const welcomeText = (numberOfFailedAttempts, nextUrl) => {
    if (nextUrl) {
        return quotes.allTasksCompleted;
    }
    if (numberOfFailedAttempts == 0) {
        return quotes.welcome;
    }
    else if (numberOfFailedAttempts == 1) {
        return quotes.noTimeLeft_tryAgain;
    }
    else if (numberOfFailedAttempts == 2) {
        return quotes.noTimeLeft_smallHint;
    }
    return quotes.noTimeLeft_bigHint;
};

export default quotes;
