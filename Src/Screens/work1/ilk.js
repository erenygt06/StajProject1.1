import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {remove,button,send_mail,symbols,yaldiz,zoom} from '../../Asets/icons/index';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ilk = () => {
  return (
    <View>
      <SafeAreaView>
        <View
          style={{
            marginLeft: windowWidth * 0.05,
            marginRight: windowWidth * 0.05,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: windowWidth * 0.05,
          }}>
          <View style={{marginTop: windowWidth * 0.03}}>
            <Image
              style={{height: windowWidth * 0.01, width: windowWidth * 0.1}}
              source={google}
            />
            <Image
              style={{
                height: windowWidth * 0.01,
                width: windowWidth * 0.1,
                marginTop: windowWidth * 0.007,
              }}
              source={remove}
            />
            <Image
              style={{
                height: windowWidth * 0.01,
                width: windowWidth * 0.07,
                marginTop: windowWidth * 0.007,
              }}
              source={remove}
            />
          </View>
          <View style={{}}>
            <Image
              style={{
                height: windowWidth * 0.1,
                width: windowWidth * 0.1,
                marginTop: windowWidth * 0.005,
              }}
              source={require('../../Asets/image/man.png')}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: windowWidth * 0.07,
              fontSize: windowWidth * 0.07,
              marginLeft: windowWidth * 0.05,
            }}>
            My Cards
          </Text>
        </View>
        <ScrollView>
          <View>
            <ScrollView
              style={{
                marginLeft: windowWidth * 0.05,
                marginTop: windowWidth * 0.06,
              }}
              horizontal="true">
              <View style={{flexDirection: 'row'}}>
                <View>
                  <View
                    style={{
                      width: windowWidth * 0.65,
                      height: windowWidth * 0.35,
                      backgroundColor: 'purple',
                      borderRadius: windowWidth * 0.03,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: windowWidth * 0.04,
                        marginLeft: windowWidth * 0.04,
                        marginTop: windowWidth * 0.04,
                        fontWeight: '500',
                      }}>
                      Balance
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: windowWidth * 0.055,
                          fontWeight: '600',
                          marginLeft: windowWidth * 0.04,
                          marginTop: windowWidth * 0.01,
                        }}>
                        25,633.00
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: windowWidth * 0.04,
                          fontWeight: '600',
                          marginLeft: windowWidth * 0.02,
                          marginTop: windowWidth * 0.02,
                        }}>
                        USD
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: windowWidth * 0.04,
                          marginTop: windowWidth * 0.03,
                        }}>
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('yaldiz')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('yaldiz')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: windowWidth * 0.07,
                          marginTop: windowWidth * 0.03,
                        }}>
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: windowWidth * 0.07,
                          marginTop: windowWidth * 0.03,
                        }}>
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.04,
                            width: windowWidth * 0.04,
                            marginTop: windowWidth * 0.008,

                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/zoom.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: windowWidth * 0.05,
                          marginTop: windowWidth * 0.03,
                        }}>
                        <Text style={{color: 'white', fontWeight: '500'}}>
                          4589
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginTop: windowWidth * 0.025,
                        marginLeft: windowWidth * 0.04,
                        marginRight: windowWidth * 0.065,
                      }}>
                      <Text style={{color: 'white'}}>12/20</Text>
                      <Image
                        style={{
                          height: windowWidth * 0.05,
                          width: windowWidth * 0.1,
                          marginTop: windowWidth * 0.005,
                          tintColor: 'white',
                        }}
                        source={require('../../Asets/icons/symbols.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={{marginLeft: windowWidth * 0.05}}>
                  <View
                    style={{
                      width: windowWidth * 0.65,
                      height: windowWidth * 0.35,
                      backgroundColor: 'orange',
                      borderRadius: windowWidth * 0.03,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: windowWidth * 0.04,
                        marginLeft: windowWidth * 0.04,
                        marginTop: windowWidth * 0.04,
                        fontWeight: '500',
                      }}>
                      Balance
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: windowWidth * 0.055,
                          fontWeight: '600',
                          marginLeft: windowWidth * 0.04,
                          marginTop: windowWidth * 0.01,
                        }}>
                        25,633.00
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: windowWidth * 0.04,
                          fontWeight: '600',
                          marginLeft: windowWidth * 0.02,
                          marginTop: windowWidth * 0.02,
                        }}>
                        USD
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: windowWidth * 0.04,
                          marginTop: windowWidth * 0.03,
                        }}>
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: windowWidth * 0.07,
                          marginTop: windowWidth * 0.03,
                        }}>
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: windowWidth * 0.07,
                          marginTop: windowWidth * 0.03,
                        }}>
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.04,
                            width: windowWidth * 0.04,
                            marginTop: windowWidth * 0.008,

                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                        <Image
                          style={{
                            height: windowWidth * 0.02,
                            width: windowWidth * 0.02,
                            marginTop: windowWidth * 0.005,
                            tintColor: 'white',
                          }}
                          source={require('../../Asets/icons/yaldiz.png')}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: windowWidth * 0.05,
                          marginTop: windowWidth * 0.03,
                        }}>
                        <Text style={{color: 'white', fontWeight: '500'}}>
                          4589
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginTop: windowWidth * 0.025,
                        marginLeft: windowWidth * 0.04,
                        marginRight: windowWidth * 0.065,
                      }}>
                      <Text style={{color: 'white'}}>12/20</Text>
                      <Image
                        style={{
                          height: windowWidth * 0.05,
                          width: windowWidth * 0.1,
                          marginTop: windowWidth * 0.005,
                          tintColor: 'white',
                        }}
                        source={require('../../Asets/icons/symbols.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              marginLeft: windowWidth * 0.05,
              marginRight: windowWidth * 0.05,
              marginTop: windowWidth * 0.05,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: windowWidth * 0.055, fontWeight: '500'}}>
              Send Money to
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: '400'}}>Search</Text>
              <Image
                style={{
                  marginLeft: windowWidth * 0.015,
                  height: windowWidth * 0.05,
                  width: windowWidth * 0.05,
                  marginTop: windowWidth * 0.005,
                  tintColor: 'black',
                }}
                source={require('../../Asets/icons/zoom.png')}
              />
            </View>
          </View>
          <View
            style={{
              marginLeft: windowWidth * 0.05,
              marginTop: windowWidth * 0.05,
              flexDirection: 'row',
            }}>
            <Image
              style={{
                height: windowWidth * 0.12,
                width: windowWidth * 0.12,
                marginTop: windowWidth * 0.005,
              }}
              source={require('../../Asets/image/adam.png')}
            />
            <Image
              style={{
                position: 'relative',
                right: windowWidth * 0.05,
                height: windowWidth * 0.12,
                width: windowWidth * 0.12,
                marginTop: windowWidth * 0.005,
              }}
              source={require('../../Asets/image/adam.png')}
            />
            <Image
              style={{
                position: 'relative',
                right: windowWidth * 0.1,
                height: windowWidth * 0.12,
                width: windowWidth * 0.12,
                marginTop: windowWidth * 0.005,
              }}
              source={require('../../Asets/image/adam.png')}
            />
            <Image
              style={{
                position: 'relative',
                right: windowWidth * 0.15,
                height: windowWidth * 0.12,
                width: windowWidth * 0.12,
                marginTop: windowWidth * 0.005,
              }}
              source={require('../../Asets/icons/yaldiz.png')}
            />
          </View>
          <View>
            <Text
              style={{
                marginLeft: windowWidth * 0.05,
                marginTop: windowWidth * 0.05,
                fontSize: windowWidth * 0.05,
              }}>
              Amount
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: windowWidth * 0.04,
            }}>
            <View
              style={{
                borderRadius: windowWidth * 0.02,
                marginLeft: windowWidth * 0.05,
                width: windowWidth * 0.7,
                height: windowWidth * 0.1,
                backgroundColor: '#F1F1F1',
              }}>
              <Text
                style={{
                  fontWeight: '400',
                  marginLeft: windowWidth * 0.03,
                  marginTop: windowWidth * 0.03,
                }}>
                450.00 USD
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#F56F3B',
                marginRight: windowWidth * 0.04,
                width: windowWidth * 0.15,
                borderRadius: windowWidth * 0.02,
              }}>
              <Image
                style={{
                  marginLeft: windowWidth * 0.04,
                  tintColor: 'white',
                  height: windowWidth * 0.07,
                  width: windowWidth * 0.07,
                  marginTop: windowWidth * 0.01,
                }}
                source={require('../../Asets/icons/send-mail.png')}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                marginLeft: windowWidth * 0.05,
                marginTop: windowWidth * 0.05,
                fontWeight: '400',
                fontSize: windowWidth * 0.04,
              }}>
              Total Sent
            </Text>
          </View>
          <View>
            <ScrollView
              style={{width: windowWidth * 1, height: windowWidth * 0.23}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: windowWidth * 0.03,
                  marginLeft: windowWidth * 0.05,
                }}>
                <View>
                  <Image
                    style={{
                      height: windowWidth * 0.12,
                      width: windowWidth * 0.16,
                      marginTop: windowWidth * 0.01,
                      borderRadius: windowWidth * 0.03,
                    }}
                    source={require('../../Asets/image/adam1.jpeg')}
                  />
                </View>
                <View
                  style={{
                    marginTop: windowWidth * 0.015,
                    marginLeft: windowWidth * 0.05,
                  }}>
                  <Text style={{fontSize: windowWidth * 0.05}}>
                    Max William
                  </Text>
                  <Text style={{fontWeight: '200'}}>03 Aug 2020</Text>
                </View>
                <View
                  style={{
                    marginLeft: windowWidth * 0.2,
                    marginTop: windowWidth * 0.06,
                  }}>
                  <Text>$458.00 USD</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: windowWidth * 0.03,
                  marginLeft: windowWidth * 0.05,
                }}>
                <View>
                  <Image
                    style={{
                      height: windowWidth * 0.12,
                      width: windowWidth * 0.16,
                      marginTop: windowWidth * 0.01,
                      borderRadius: windowWidth * 0.03,
                    }}
                    source={require('../../Asets/image/adam1.jpeg')}
                  />
                </View>
                <View
                  style={{
                    marginTop: windowWidth * 0.015,
                    marginLeft: windowWidth * 0.05,
                  }}>
                  <Text style={{fontSize: windowWidth * 0.05}}>
                    Max William
                  </Text>
                  <Text style={{fontWeight: '200'}}>03 Aug 2020</Text>
                </View>
                <View
                  style={{
                    marginLeft: windowWidth * 0.2,
                    marginTop: windowWidth * 0.06,
                  }}>
                  <Text>$458.00 USD</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: 'white',
            width: windowWidth * 1,
            height: windowWidth * 0.15,
          }}>
          <Image
            style={{
              marginLeft: windowWidth * 0.05,
              height: windowWidth * 0.1,
              width: windowWidth * 0.1,
              marginTop: windowWidth * 0.015,
              tintColor: 'orange',
            }}
            source={require('../../Asets/icons/yaldiz.png')}
          />
          <Image
            style={{
              height: windowWidth * 0.1,
              width: windowWidth * 0.1,
              marginTop: windowWidth * 0.015,
              tintColor: 'black',
            }}
            source={require('../../Asets/icons/yaldiz.png')}
          />
          <Image
            style={{
              height: windowWidth * 0.1,
              width: windowWidth * 0.1,
              marginTop: windowWidth * 0.015,
              tintColor: 'black',
            }}
            source={require('../../Asets/icons/yaldiz.png')}
          />
          <Image
            style={{
              marginRight: windowWidth * 0.05,

              height: windowWidth * 0.1,
              width: windowWidth * 0.1,
              marginTop: windowWidth * 0.015,
              tintColor: 'black',
            }}
            source={require('../../Asets/icons/yaldiz.png')}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};


export default ilk;

const styles = StyleSheet.create({});
