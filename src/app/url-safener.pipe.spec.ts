import { UrlSafenerPipe } from './url-safener.pipe';

describe('UrlSafenerPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlSafenerPipe();
    expect(pipe).toBeTruthy();
  });
});
